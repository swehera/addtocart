import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
connect();

export const POST = async (request: NextRequest) => {
  //   console.log(connect());
  connect();

  try {
    const reqBody = await request.json();
    const { email, password } = await reqBody;

    // User validation
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exists",
        },
        { status: 400 }
      );
    }

    // Password validation
    const validPassword = bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Invalid Password",
        },
        {
          status: 400,
        }
      );
    }

    const loggedData = {
      id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    };

    // console.log(reqBody);
    // console.log("This is post", newUser);
    return NextResponse.json({
      message: "User logged In successfully",
      success: true,
      loggedData,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
