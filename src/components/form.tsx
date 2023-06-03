import imgBanner from "@/assets/images/banner.png";
import imgProduct from "@/assets/images/Product.png";

export default function Form() {
  return (
    <section className="contact">

      <div className="contact-header">
        <img src={imgProduct} alt="" />
        <div className="container-prices">
          <h2 className="price-title">الســــعـــر</h2>
          <span className="price">540</span>
          <p className="price-old">بــدلا مــن <span>750 جنيه</span></p>
        </div>
      </div>

      <div className="contact-footer">
        <h4>الشحن مجاني لجميع المحافظات </h4>
        <h4>الـــدفـــع عنـــــد اسـتــــلام الـمنتـــج</h4>
        <p>سياسه الاسـترجاع في حاله عدم رضائك عن النتائج ضمان استرجاع خلال 14 يوم</p>

        <div id="contact-form" className="contact-form">
          <h2>سجـل بياناتك الآن وسـوف نقوم بالتواصل</h2>
          <h2>معكـم بكل التفـاصيـل قبـل شحـن المنتج</h2>

          <form action="https://api.sheetmonkey.io/form/6KZt1sEibG9ceBpus3hduf" method="post" id="form" className="form">

            <div className="form-control">

              <input type="text" placeholder="الاسم" id="username" name="name" required />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <input type="tel" placeholder="اطلب الأن" id="email" name="phone" pattern="^01[0-2,5]{1}[0-9]{8}$" required />
              <small>Error message</small>
            </div>

            <div style={{ display: "none" }} className="form-control">
              <input type="password" placeholder="Password" id="password" name="phone" required />
              <small>Error message</small>
            </div>
            <div style={{ display: "none" }} className="form-control">
              <input type="password" placeholder="Password two" id="password2" />
              <small>Error message</small>
            </div>

            <input id="redDir" type="hidden" name="x-sheetmonkey-redirect" value="./thanks.html" />
            <input className="btn" value="اطلب الان" type="submit"></input>
          </form>
        </div>

        <div className="banner">
          <img src={imgBanner} alt="" />
        </div>
      </div>

    </section>
  );
}
