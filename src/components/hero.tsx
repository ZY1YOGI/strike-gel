import imgProduct from "@/assets/images/Product.png";
import imgArrow from "@/assets/images/arrow.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="content">
        <div className="img-and-product">
          <img className="product" src={imgProduct} alt="" />
        </div>

        <div className="top-sec">
          <h2>الحل السحــري</h2>
          <h2 className="border-btm">للضعف عند الرجال</h2>
          <h4>
            المنتــج الأكثــر <br /> مبيـعـا في الـعالــم
          </h4>
        </div>

        <img className="arrow-img" src={imgArrow} alt="" />

        <div className="bottom-sec">
          <div className="all-line">
            <div className="line">
              <span></span>
              <div className="row">
                <li>يعطيــــــك انــتصــــــــاب قــــــوي وصلـــــــب</li>
                <li>و يقضــــــي نهــائيـــــــــا علـــي الـضـعــــــــف</li>
              </div>
            </div>

            <div className="line">
              <span></span>
              <div className="row">
                <li>يعمـــل علي اطـــالـــة العضــو الذكــري طولا</li>
                <li>وعرضــا حتــي تصــل الـي درجـة الفحــــولــة</li>
              </div>
            </div>

            <div className="line">
              <span></span>
              <div className="row">
                <li>يقــضي تمــامـــــــا علـــي ســرعـــة الـقــــذف</li>
                <li>لعــــــلاقة اطـــول وامتـــع بيـــن الطـــــرفين</li>
              </div>
            </div>

            <div className="line">
              <span></span>
              <div className="row">
                <li>يـــزيــــد الرغبـــة الجنسيــــة ويـــرفـــع مــــن</li>
                <li>الاداء والـــقــــــوة للــــرجــــال لــتســـتعـيــــد</li>
                <li>
                  قــــوتـــــك وثـقـتـــــك فـــــي الـعـــلاقــــــــــة
                </li>
              </div>
            </div>

            <div className="line">
              <span></span>
              <div className="row">
                <li>امــــن وصـحــــي لأنـــــه مــــن اعــشـــــــــاب</li>
                <li>وفـيتــامينـــــات طــــبيعيــــــة </li>
              </div>
            </div>
          </div>

          <a href="#form" className="btn">
            {" "}
            اطلب الان
          </a>
        </div>
      </div>
    </section>
  );
}
