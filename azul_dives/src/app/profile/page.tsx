import { authLogin } from "@/_utils/auth/authLogin";
import { setAuthToken, deleteAuthToken } from "@/_helpers/authToken";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/_utils/queries";
import { getAuthToken } from "@/_helpers/authToken";
import { UnauthorizedView } from "@/_components/UnauthorizedView";
import { Layout } from "@/_components/Layout";
import { ProfileForm } from "@/_components/ProfileForm";

const Login = async () => {
  const { authorized } = await getAuthToken();
  const { diver } = await getUserProfile()
  const { first_name, last_name } = diver || ""

  if (!!authorized) {
    return (
      <>
        <Layout>
          <div className="font-semibold text-2xl pb-[20px]">
            Hello, {first_name} {last_name}
          </div>
          <div className="font-semibold text-2xl pb-[20px]">Settings</div>
          <ProfileForm user={diver} />
          <button className="block bg-black text-white h-[50px] mt-[100px] w-[225px] rounded-full flex items-center justify-center gap-[5px]">
            Switch to Guiding
          </button>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <UnauthorizedView page="profile" />
      </Layout>
    </>
  );
  // const user = await getUserProfile()
  // console.log(user)

  // const [user, setUser] = useState({
  //   first_name: "",
  //   last_name: "",
  //   username: ""
  // })

  // useEffect(() => {
  //   const getdata = async() => {
  //   const { diver } = await getUserProfile()
  //   setUser(diver)
  //   }
  //   getdata()
  // }, [])

  //   const handleLogin = async () => {
  //       const body = {
  //         auth: {
  //           username: "diego",
  //           password: "Sharkyshark",
  //         },
  //       };
  //       const res = await authLogin(body)
  //       setAuthToken(res.token)
  //   }

  // const handleLogout = () => {
  //   deleteAuthToken()
  //   location.reload()
  // };

  // const { first_name, last_name, username } = user || ""

  // const fullName = `${first_name} ${last_name}`

  return (
    <>
      {/* <div>Hello, {fullName}</div>
        <div>Settings</div>
        <button onClick={handleLogin}>Login</button>
        <br />
        <button onClick={handleLogout}>Logout</button> */}
    </>
  );
};

export default Login;
