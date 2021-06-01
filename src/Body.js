import React, { useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = (props) => {
  const [kilo, setKilo] = useState();
  const [boy, setBoy] = useState();
  const [sonuc, setSonuc] = useState("");

  function alertWarning(){
    props.showAlert(true);
    setTimeout(() => {
      props.showAlert(false)
      setSonuc("")
    }, 1800);
    
   }

  function hesapla() {
    if ({ boy }) {
      let dgr = boy / 100;
      let boydgr = dgr * dgr;
      let indeks = kilo / boydgr;

      
      if (indeks < 18.5) {
        setSonuc('İdeal Kilonunuzun Altındasınız');
      } else if (indeks > 18.5 && indeks < 24.9) {
        setSonuc('İdeal Kilodasınız');
      } else if (indeks > 25 && indeks < 29.9) {
        setSonuc('ideal Kilonunuzun Üstündesiniz');
      } else if (indeks > 30 && indeks < 39.9) {
        setSonuc('Fazla Kilolu Kategorisindesiniz');
      } else if (indeks > 40) {
        setSonuc('Obez Kategorisindesiniz');
      } else {
        return setSonuc('Uygun Değer Giriniz');
      }
    }
    alertWarning()
  }
 
  return (
    <div className="container">
    <h2 className="display-6">Vücut Kitle İndeksi Hesaplama</h2>
      <div className="degerler bg-primary">
        <label htmlFor="boy">Boyunuz</label>
        <input
          type="number"
          id="boy"
          min="0"
          value={boy}
          onChange={e => setBoy(e.target.value)}
        />
        <label htmlFor="kilo">Kilonuz</label>
        <input
          type="number"
          id="kilo"
          min="0"
          value={kilo}
          onChange={e => setKilo(e.target.value)}
        />
        {sonuc && <div class="result">{sonuc}</div>}
        <button onClick={hesapla} className="button">Hesapla</button>
      </div>
    </div>
  );
}

export default Body;
