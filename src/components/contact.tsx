import imgBanner from "@/assets/images/banner.png";
import imgProduct from "@/assets/images/Product.png";
import Form from "@/components/form";

export default function Contact() {

  return (
    <section className="contact">

      <div className="contact-header">
        <img src={imgProduct} alt="" />
        <div className="container-prices">
          <h2 className="price-title">الســــعـــر</h2>
          <span className="price">540</span>
          <p className="price-old">بــدلا مــن <span>750</span> جنيه</p>
        </div>
      </div>

      <div className="contact-footer">
        <h4>الشحن مجاني لجميع المحافظات </h4>
        <h4>الـــدفـــع عنـــــد اسـتــــلام الـمنتـــج</h4>
        <p>سياسه الاسـترجاع في حاله عدم رضائك عن النتائج ضمان استرجاع خلال 14 يوم</p>

        <div className="contact-form" id="contact-form">
            <div className="contact-form-shadow">
              <h2>سجـل بياناتك الآن وسـوف نقوم بالتواصل</h2>
              <h2>معكـم بكل التفـاصيـل قبـل شحـن المنتج</h2>
            </div>

          <Form />

        </div>
      </div>

      <img className="banner" src={imgBanner} alt="" />
    </section>
  );
}
