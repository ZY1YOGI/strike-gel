import imgDoctor from "@/assets/images/doctor.png";

export default function Advise() {
  return (
    <section className="section-3">
      <div className="contanier">
        <div className="div-text">
          <div className="top-sec"></div>
          <div className="bottom-sec">
            <div className="head">
              <p>ينصح الدكتور البروفيسور</p>
              <span>نيكـــولاوس ميـرتزيــوتـس</span>
              <p>بــأستخدام سترايـك جيل</p>
            </div>

            <div className="all-line">
              <div className="line">
                <span></span>
                <div className="row">
                  <li>لأنـه يعطيــك نتيـجة فوريـة</li>
                  <li>سـريـعة منـذ اول استـخدام</li>
                </div>
              </div>

              <div className="line">
                <span></span>
                <div className="row">
                  <li>لأنـــه كـورس علاجي نهائي</li>
                  <li>ولــيـــــس حـــــــل مـــــؤقـت</li>
                </div>
              </div>

              <div className="line">
                <span></span>
                <div className="row">
                  <li>امــــن وصحـي علي مرضـي </li>
                  <li>القلـب والضغـــط والـسكــر</li>
                </div>
              </div>

              <div className="line">
                <span></span>
                <div className="row">
                  <li>لأنه سـيجعلك بقـوة شـاب</li>
                  <li>فــــي الــــــ20 مـــن عــمـــــره </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-img">
          <img src={imgDoctor} alt="" />
        </div>
      </div>

      <a href="#form" className="btn">
        اطلب الان
      </a>
    </section>
  );
}
