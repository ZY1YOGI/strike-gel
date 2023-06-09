import img4 from "@/assets/images/4.png";

export default function Results() {
    return (
        <section className="results">
            <div className="content">
                <div className="results-header">
                    <h3>نتائج سترايك جيل</h3>
                    <p>في اول اسـبوعين</p>
                    <p>مـن الأستـخـدام</p>
                </div>

                <div className="results-info">
                    <div className="box">
                        <h2>ألاسبوع الأول</h2>
                        <div className="text">
                            <p>تـأخيــــر القــــذف : مــن ١٥ الـي ٢٠ دقيقة</p>
                            <p>زيادة الطــول : من ٣.٥ سم الي ٤.٥ سم</p>
                            <p>زيــادة الانتصــــــاب بنسبــــة ٪٤.٠ الي ٪١٠٠</p>
                        </div>
                    </div>

                    <img className="img-sm" src={img4} alt="" />
                </div>

                <div className="results-info">
                    <div className="box">
                        <h2> ألاسبوع الثاني</h2>
                        <div className="text">
                            <p>تأخيــــر القــــذف : من ٢٥ الي ٤٠ دقيقــة</p>
                            <p>زيــادة الطــول : مـــن ٥ سـم الي ٧ سـم </p>
                            <p>زيـــادة الانتصـــــاب بنـسبــــة ٪٧٠ الي ٪١٠٠ </p>
                        </div>
                    </div>

                    <img src={img4} alt="" />
                </div>
            </div>
        </section>
    );
}
