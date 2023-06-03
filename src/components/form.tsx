import { useState } from "react";



export default function Form() {

  const [errorName, setErrorName] = useState("")
  const [errorPhone, setErrorPhone] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorName("")
    setErrorPhone("")

    if (name == "")
      return setErrorName("الرجاء ادخال الاسم")

    if (name.length < 3)
      return setErrorName("الاسم اقل من 3 احرف")

    if (phone == "")
      return setErrorPhone("الرجاء ادخال رقم الهاتف للتواصل")

    if (!/^01[0-2,5]{1}[0-9]{8}$/.test(phone))
      return setErrorPhone("الرجاء ادخال رقم صحيح");
    (document.getElementById("form") as HTMLFormElement).submit()
  }

  return (

    <form onSubmit={onSubmitForm} action="https://api.sheetmonkey.io/form/7HDhG9ECHx6eQfCD54RF9j" method="post" id="form" className="form">

      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />

      <div className="form-control">
        <input type="text" name="name" id="name" placeholder="الاسم" value={name} onChange={e => setName(e.target.value)} />
        <small>{errorName}</small>
      </div>

      <div className="form-control">
        <input type="text" name="phone" id="phone" placeholder="رقم الهاتف" value={phone} onChange={e => setPhone(e.target.value)} />
        <small>{errorPhone}</small>
      </div>

      <input className="form-btn btn" value="اطلب الان" type="submit" />
    </form>

  );
}
