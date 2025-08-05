const AuthForm = () => {
  return (
    <>
      <center className="bg-red-400 p-10 m-80">
        <form className="bg-green-300 p-4">
          <div className="p-2 font-bold text-xl">
            <h1>SignUp</h1>
          </div>
          <div className="bg-slate-600 p-6 outline-none">
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="name@example.com"
            />
          </div>
          <div className="bg-slate-500 p-6 outline-none">
            <input type="password" required placeholder="password" />
          </div>
          <div className="bg-orange-400 m-14 rounded font-bold text-white">
            <button>SignUp</button>
          </div>
        </form>
      </center>
    </>
  );
};

export default AuthForm;
