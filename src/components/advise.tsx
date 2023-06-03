import imgDoctor from "@/assets/images/doctor.png";

export default function Advise() {
  return (
    <section className="advise">
      <div className="advise-container">

        <div className="advise-header">

          <div className="head">
            <p>ينصح الدكتور البروفيسور</p>
            <span>نيكـــولاوس ميـرتزيــوتـس</span>
            <p>بــأستخدام سترايـك جيل</p>
          </div>

          <div className="all-line">

            <div className="line">
              <span></span>
              <ul>
                <li>لأنـه يعطيــك نتيـجة فوريـة</li>
                <li>سـريـعة منـذ اول استـخدام</li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>لأنـــه كـورس علاجي نهائي</li>
                <li>ولــيـــــس حـــــــل مـــــؤقـت</li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>امــــن وصحـي علي مرضـي </li>
                <li>القلـب والضغـــط والـسكــر</li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>لأنه سـيجعلك بقـوة شـاب</li>
                <li>فــــي الــــــ 20 مـــن عــمـــــره </li>
              </ul>
            </div>
          </div>
        </div>

        <img src={imgDoctor} alt="" />

      </div>

      <a href="#form" className="btn">اطلب الان</a>
    </section>
  );
}
