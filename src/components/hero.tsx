import imgProduct from "@/assets/images/Product.png";
import imgArrow from "@/assets/images/arrow.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-img-product">
          <img src={imgProduct} alt="" />
        </div>

        <div className="hero-header">
          <h2 className="hero-header-title">الحل السحــري</h2>
          <h2 className="hero-header-subtitle">للضعف عند الرجال</h2>
          <h4>
            المنتــج الأكثــر <br /> مبيـعـا في الـعالــم
          </h4>
        </div>

        <img className="hero-arrow-img" src={imgArrow} alt="" />

        <div className="hero-footer">
          <div className="all-line">
            <div className="line">
              <span></span>
              <ul>
                <li>يعطيــــــك انــتصــــــــاب قــــــوي وصلـــــــب</li>
                <li>و يقضــــــي نهــائيـــــــــا علـــي الـضـعــــــــف</li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>يعمـــل علي اطـــالـــة العضــو الذكــري طولا</li>
                <li>وعرضــا حتــي تصــل الـي درجـة الفحــــولــة</li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>يقــضي تمــامـــــــا علـــي ســرعـــة الـقــــذف</li>
                <li>لعــــــلاقة اطـــول وامتـــع بيـــن الطـــــرفين</li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>يـــزيــــد الرغبـــة الجنسيــــة ويـــرفـــع مــــن</li>
                <li>الاداء والـــقــــــوة للــــرجــــال لــتســـتعـيــــد</li>
                <li>قــــوتـــــك وثـقـتـــــك فـــــي الـعـــلاقــــــــــة
                </li>
              </ul>
            </div>

            <div className="line">
              <span></span>
              <ul>
                <li>أمــــن وصـحــــي لأنـــــه مــــن اعــشـــــــــاب</li>
                <li>وفـيتــامينـــــات طــــبيعيــــــة </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#form" className="btn">
            اطلب الان
          </a>
        </div>
      </div>
    </section>
  );
}
