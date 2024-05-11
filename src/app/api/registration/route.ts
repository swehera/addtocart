import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
connect();

export const POST = async (request: NextRequest) => {
  // console.log(connect());

  try {
    const reqBody = await request.json();
    const { username, email, password } = await reqBody;

    // User validation
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 500 }
      );
    }
    // Email Validatation
    const emailValidation = () => {
      return String(email)
        .toLocaleLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    if (!emailValidation()) {
      return NextResponse.json(
        {
          error: "Email is Not Valid",
        },
        { status: 500 }
      );
    }

    // Password hasing
    const salt = await bcryptjs.genSalt(10);
    const encryptedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
    });

    const saveUser = await newUser.save();
    console.log(reqBody);
    console.log("This is post", newUser);
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      reqBody,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
