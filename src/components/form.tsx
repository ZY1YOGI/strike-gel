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

    if (name.length < 1)
      return setErrorName("الاسم اقل من 1 احرف")

    if (phone == "")
      return setErrorPhone("الرجاء ادخال رقم الهاتف للتواصل")

    if (!/^01[0-2,5]{1}[0-9]{8}$/.test(phone))
      return setErrorPhone("الرجاء ادخال رقم صحيح");

    return (document.getElementById("form") as HTMLFormElement).submit()
  }

  return (

    <form action="https://api.sheetmonkey.io/form/nv3q7KdX21CFQnrb6c9GCT" method="post" onSubmit={onSubmitForm} target="_blank" id="form" className="form" role="form">

      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
      <input  type="hidden"  name="x-sheetmonkey-redirect" value={`${document.URL}thanks`} />
      <div className="form-control">
        <input type="text" name="name" id="name" placeholder="الاسم" value={name} onChange={e => setName(e.target.value)} maxLength={25} />
        <small>{errorName}</small>
      </div>

      <div className="form-control">
        <input type="tel" name="phone" id="phone" placeholder="رقم الهاتف" value={phone} onChange={e => setPhone(e.target.value)}  maxLength={11} minLength={11} />
        <small>{errorPhone}</small>
      </div>

      <input className="form-btn btn" value="اطلب الان" type="submit" />
    </form>

  );
}
