interface CountProps {
  count: number;
}

const Count: React.FC<CountProps> = ({ count }) => {
  return <div>{count}</div>;
};

export default Count;
