import { useState } from "react";
import Button from "../../../Buttons/Button";
import { useForm } from "react-hook-form";
import { ReactComponent as EyeShow } from "../../../../icons/EyeShow.svg";
import { ReactComponent as EyeHidden } from "../../../../icons/EyeHidden.svg";
import { create, setUser, usersList } from "../../../../constants/user";

const Login = ({ open }) => {
  const [show, setShow] = useState(true);
  const [tab, setTab] = useState(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    create(data);
    window.location.reload(false);
  };

  const login = (data) => {
    let currentUser = usersList().filter(
      (u) => u.email === data.email && u.password === data.password
    );
    if (currentUser.length > 0) {
      setUser(currentUser[0]);
      window.location.reload(false);
    } else {
      alert("Foydalanuvchi topilmadi!");
    }
  };
 

  return (
    <>
      <section>
        <div className="px-[100px] pt-[70px]">
          <div className="bg-[#F8F8F8] flex p-[5px] rounded-[100px] items-center">
            <span
              className={
                tab
                  ? "text-[green] font-semibold relative z-20 px-12 py-1 "
                  : "text-[gray] cursor-pointer relative z-20  px-[53px]"
              }
              onClick={() => setTab(true)}
            >
              Kirish
            </span>
            <span
              className={
                "bg-white absolute h-8 rounded-[100px] shadow-lg z-10 duration-500 w-32"
              }
              style={
                tab
                  ? { transform: "translateX(0)", width: "128px" }
                  : { transform: "translateX(130px)", width: "195px" }
              }
            ></span>
            <span
              className={
                tab
                  ? "text-[gray] px-5 cursor-pointer relative z-20  "
                  : "text-[green] font-semibold  rounded-[100px] px-5 py-1 relative z-20"
              }
              onClick={() => setTab(false)}
            >
              Ro'yxatdan o'tish
            </span>
          </div>
        </div>

        {tab ? (
          <form className="pt-12 px-[86px]" onSubmit={handleSubmit(login)}>
            <div className="flex flex-col relative">
              <label htmlFor="email" className="text-sm text-gray4 mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="border-b bg-transparent outline-none pb-3  focus:border-primaryGreen"
                {...register("email", { required: true })}
              />
              {/* <div className="absolute bottom-4 ">
                <img
                  src="https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg"
                  width={35}
                  style={{ borderRadius: "3px" }}
                  alt=""
                />
              </div> */}
            </div>
            <div className="flex flex-col py-6 relative">
              <label htmlFor="password" className="text-sm text-gray4 mb-1.5">
                Parol
              </label>
              <input
                type={show ? "password" : "text"}
                className="border-b bg-transparent pr-7 tracking-widest outline-none pb-3 focus:border-primaryGreen"
                {...register("password", { required: true })}
              />
              <div className="absolute right-0 top-[50%] cursor-pointer">
                {show ? (
                  <div onClick={() => setShow(false)}>
                    {" "}
                    <EyeHidden />
                  </div>
                ) : (
                  <div onClick={() => setShow(true)}>
                    {" "}
                    <EyeShow />
                  </div>
                )}
              </div>
            </div>
            <p className="text-xs text-gray4 text-right cursor-pointer">
              Parolni unutdingizmi?
            </p>
            <div className="py-12" onClick={handleSubmit(login)}>
              <Button title={"Tizimga kirish"} />
            </div>
          </form>
        ) : (
          <section>
            <div className="pt-10 flex flex-col items-center">
              {/* <NoAvatar className="cursor-pointer" /> */}
              <p className="text-xs pt-4">Fotosurat yuklang (optinal)</p>
            </div>
            <form className="pt-12 px-[86px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col pb-6">
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col pb-6">
                <input
                  type="text"
                  placeholder="Familiyangiz"
                  className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen"
                  {...register("surname", { required: true })}
                />
              </div>
              <div className="flex flex-col pb-6">
                <input
                  type="number"
                  placeholder="Telefon raqamingiz"
                  className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen"
                  {...register("number", { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray4 mb-1.5">
                  Elektron pochta (optinal)
                </label>
                <input
                  type="email"
                  className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col py-6 relative">
                <label htmlFor="password" className="text-sm text-gray4 mb-1.5">
                  Parolni o’ylab toping
                </label>
                <input
                  type={show ? "password" : "text"}
                  className="border-b bg-transparent pr-7 tracking-widest outline-none pb-3 focus:border-primaryGreen"
                  {...register("password", { required: true })}
                />
                <div className="absolute right-0 top-[50%] cursor-pointer">
                  {show ? (
                    <div onClick={() => setShow(false)}>
                      <EyeHidden />
                    </div>
                  ) : (
                    <div onClick={() => setShow(true)}>
                      <EyeShow />
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray3 text-center">
                “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz <br />
                <span className="text-primaryGreen">
                  Foydalanish shartlarini qabul qilgan xisoblanasiz.
                </span>
              </p>
              <div className="pb-12 pt-5" onClick={handleSubmit(onSubmit)}>
                <Button title={"Ro’yxatdan o’tish"} />
              </div>
            </form>
          </section>
        )}
      </section>
    </>
  );
};
export default Login;
