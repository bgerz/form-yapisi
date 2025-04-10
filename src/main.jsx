import { StrictMode, useState  } from 'react'
import { createRoot } from 'react-dom/client'

const initialValues ={
  namesurname:'',
  email:'',
  phone1:'',
  phone:'',
  activity:'',
  music:'',
  school:'',
  classlevel:'',
  city:'',
  hero:'',
  film:'' }

function App() {
  const[values, setValues]= useState(initialValues)
  
  function handleInputChange(e){
    const name= e.target.name;
    const value= e.target.value;
    
    setValues({
      ...values,
      [name]: value,
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("form submited");
    console.log(values);
    setValues(initialValues)
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100 overflow-auto'>
      <form onSubmit={handleSubmit} style={{boxShadow: "0 0 30px rgba(0,0,0,0.5)"}} className='needs validation was-validated'>
        <div  className='row'>
          <div style={{ backgroundColor: 'aliceblue' }} className='col-lg'></div>
          <div id='c1' className='col-lg-12'>
            <div className='text-center'>
              <h2 style={{ color: "#004386" }}>Online Etkinlik Katılım Formu</h2>
              <h4 style={{ color: "#004386 " }}>Lise Öğrencilerine Özel Design Radar<br />
                Endüstriyel Tasarım Atölyesi <br />28 Aralık 2021
              </h4>
            </div>
            <div className='row'>
              <div className='col-md'>

                <div className='mt-3'>
                  <label htmlFor="validationTooltip01" className="form-label">Ad soyad: </label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="validationTooltip01" 
                  name='namesurname'
                  value={values.namesurname} onChange={handleInputChange}
                  pattern="[ a-zçğıöşüA-ZÇĞİÖŞÜ]{1,30}" 
                  required />
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationTooltip02" className="form-label">E-mail:</label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="validationTooltip02" name='email'
                    value={values.email} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationTooltipUsername" className="form-label">Telefon:</label>
                  <div className="input-group has-validation">
                    <select className="form-select-toggle" id="validationDefault04" name='phone1' 
                     onChange={handleInputChange} required value={values.phone1}>
                      <option  disabled value="">Seçiniz</option>
                      <option value="+90">🇹🇷(+90)</option>
                      <option value="+49">🇩🇪(+49)</option>
                      <option value="+1">🇺🇸(+1)</option>
                      <option value="+54">🇦🇷(+54)</option>
                      <option value="+61">🇦🇺(+61)</option>
                      <option value="+994">🇦🇿(+994)</option>
                      <option value="+44">🇬🇧(+44)</option>
                      <option value="+55">🇧🇷(+55)</option>
                      <option value="+86">🇨🇳(+86)</option>
                      <option value="+33">🇫🇷(+33)</option>
                      <option value="+91">🇮🇳(+91)</option>
                      <option value="+31">🇳🇱(+31)</option>
                      <option value="+34">🇪🇸(+34)</option>
                      <option value="+39">🇮🇹(+39)</option>
                      <option value="+81">🇯🇵(+81)</option>
                      <option value="+1">🇨🇦(+1)</option>
                      <option value="+52">🇲🇽(+52)</option>
                      <option value="+7">🇷🇺(+7)</option>
                      <option value="+966">🇸🇦(+966)</option>
                      <option value="+30">🇬🇷(+30)</option>
                    </select>
                    <input type="tel" className="form-control" id="validationTooltipUsername"
                      aria-describedby="validationTooltipUsernamePrepend" pattern="^[0-9]{3}( )?[0-9]{3}( )?[0-9]{4}$" name='phone'
                      value={values.phone} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationDefault06" className="form-label">Etkinlik Adı: </label>
                  <select className="form-select" id="validationDefault06"  name='activity'
                  onChange={handleInputChange} required value={values.activity}>
                    <option  disabled value="">Seçiniz</option>
                    <option value="1">Design Radar</option>
                  </select>
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationDefault09" className="form-label">En sevdiğiniz müzisyen/ müzik grubu hangisidir?</label>
                  <input type="text" className="form-control" id="validationDefault09" name='music' 
                  value={values.music} onChange={handleInputChange}required />
                </div>

              </div>

              <div className='col-md'>

                <div className='mt-3'>
                  <label htmlFor="validationDefaultUsername3" className='form-label'>Okul Adı: </label>
                  <input type="text" className='form-control' id="validationDefaultUsername3" name='school' 
                  value={values.school} onChange={handleInputChange} required />
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationDefault04" className="form-label">Sınıf Düzeyi:</label>
                  <select className="form-select" id="validationDefault04" name='classlevel' 
                  onChange={handleInputChange} required value={values.classlevel}>
                    <option disabled value="">Seçiniz</option>
                    <option value="82">Hazırlık</option>
                    <option value="83">9.Sınıf</option>
                    <option value="84">10.Sınıf</option>
                    <option value="85">11.Sınıf</option>
                    <option value="86">12.Sınıf</option>
                    <option value="87">Mezun</option>
                  </select>
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationDefault05" className="form-label">Okul Şehri:</label>
                  <select className="form-select" id="validationDefault05" name='city' 
                  onChange={handleInputChange} required value={values.city}>
                    <option disabled value="">Seçiniz</option>
                    <option value="01">Adana</option>
                    <option value="02">Adıyaman</option>
                    <option value="03">Afyon</option>
                    <option value="04">Ağrı</option>
                    <option value="05">Amasya</option>
                    <option value="06">Ankara</option>
                    <option value="07">Antalya</option>
                    <option value="08">Artvin</option>
                    <option value="09">Aydın</option>
                    <option value="10">Balıkesir</option>
                    <option value="11">Bilecik</option>
                    <option value="12">Bingöl</option>
                    <option value="13">Bitlis</option>
                    <option value="14">Bolu</option>
                    <option value="15">Burdur</option>
                    <option value="16">Bursa</option>
                    <option value="17">Çanakkale</option>
                    <option value="18">Çankırı</option>
                    <option value="19">Çorum</option>
                    <option value="20">Denizli</option>
                    <option value="21">Diyarbakır</option>
                    <option value="22">Edirne</option>
                    <option value="23">Elazığ</option>
                    <option value="24">Erzincan</option>
                    <option value="25">Erzurum</option>
                    <option value="26">Eskişehir</option>
                    <option value="27">Gaziantep</option>
                    <option value="28">Giresun</option>
                    <option value="29">Gümüşhane</option>
                    <option value="30">Hakkari</option>
                    <option value="31">Hatay</option>
                    <option value="32">Isparta</option>
                    <option value="33">İçel</option>
                    <option value="34">İstanbul</option>
                    <option value="35">İzmir</option>
                    <option value="36">Kars</option>
                    <option value="37">Kastamonu</option>
                    <option value="38">Kayseri</option>
                    <option value="39">Kırklareli</option>
                    <option value="40">Kırşehir</option>
                    <option value="41">Kocaeli</option>
                    <option value="42">Konya</option>
                    <option value="43">Kütahya</option>
                    <option value="44">Malatya</option>
                    <option value="45">Manisa</option>
                    <option value="46">K.Maraş</option>
                    <option value="47">Mardin</option>
                    <option value="48">Muğla</option>
                    <option value="49">Muş</option>
                    <option value="50">Nevşehir</option>
                    <option value="51">Niğde</option>
                    <option value="52">Ordu</option>
                    <option value="53">Rize</option>
                    <option value="54">Sakarya</option>
                    <option value="55">Samsun</option>
                    <option value="56">Siirt</option>
                    <option value="57">Sinop</option>
                    <option value="58">Sivas</option>
                    <option value="59">Tekirdağ</option>
                    <option value="60">Tokat</option>
                    <option value="61">Trabzon</option>
                    <option value="62">Tunceli</option>
                    <option value="63">Şanlıurfa</option>
                    <option value="64">Uşak</option>
                    <option value="65">Van</option>
                    <option value="66">Yozgat</option>
                    <option value="67">Zonguldak</option>
                    <option value="68">Aksaray</option>
                    <option value="69">Bayburt</option>
                    <option value="70">Karaman</option>
                    <option value="71">Kırıkkale</option>
                    <option value="72">Batman</option>
                    <option value="73">Şırnak</option>
                    <option value="74">Bartın</option>
                    <option value="75">Ardahan</option>
                    <option value="76">Iğdır</option>
                    <option value="77">Yalova</option>
                    <option value="78">Karabük</option>
                    <option value="79">Kilis</option>
                    <option value="80">Osmaniye</option>
                    <option value="81">Düzce</option>
                  </select>
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationDefault07" className="form-label">Favori kurgu kahramanınız kimdir? </label>
                  <input type="text" className="form-control" id="validationDefault07" name='hero'
                  value={values.hero} onChange={handleInputChange} required />
                </div>

                <div className='mt-3'>
                  <label htmlFor="validationDefault08" className="form-label">Sizi en çok etkileyen film karakteri
                    hangisidir?</label>
                  <input type="text" className="form-control" id="validationDefault08" name='film'
                  value={values.film} onChange={handleInputChange} required />
                </div>

              </div>

            </div>

            <div className='form-group mt-3'>
              <label>
                <strong> Gerekli Malzemeler</strong><br />
                Çizim malzemesi: Kâğıt-kalem-renkli kalem<br />
                Katılımcıların etkinlik öncesinde cep telefonlarına camscanner uygulaması yüklenmiş olmalıdır.<br />
                Uygulama yüklemesi için:
                <a target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.intsig.camscanner&amp;hl=tr&amp;gl=US">
                  <img src="src/pic/app.png" alt="Google Store" /></a>
                <a target="_blank" href="https://apps.apple.com/tr/app/camscanner/id388627783?l=tr">
                  <img src="src/pic/app-store (1).png" alt="App Store" /></a>
              </label>
            </div>

            <div className='col-12'>
              <div className='form-check'>
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  <a target="_blank" href="https://www.khas.edu.tr/kvkk-aydinlatma-metni/">Aydınlatma Metni</a>’ni okudum
                  ve KVKK kapsamında bilgilerimin kullanılmasına izin veriyorum.
                </label>
              </div>
            </div>

            <div className='col-12'>
              <button className="btn mt-2" style={{ backgroundColor: "#004386", color: "white" }} type="submit">Kaydet</button>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
