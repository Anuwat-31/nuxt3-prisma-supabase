export default () => {
  const role = useState("role", () => null);
  const fullName = useState("fullName", () => null);
  const email = useState("email", () => null);
  return { role, fullName, email };
};
