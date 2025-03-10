  // Butonlar ve ses dosyalarını ilişkilendirme
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          // Hangi butona tıklandığını belirleme
          const soundId = `${button.id}-sound`;
          const sound = document.getElementById(soundId);

          // Ses çalma
          if (sound) {
              sound.currentTime = 0;  // Sesin başa sarılmasını sağlar
              sound.play();
          }

          // Tıklama efektini simüle et
          button.style.transform = 'translateY(5px)'; // Buton biraz aşağıya kayar
          setTimeout(() => {
              button.style.transform = ''; // 0.2 saniye sonra butonun eski haline dönmesini sağlar
          }, 200); // 200ms sonra eski haline döner
      });
  });

  // Klavye tuşları ile butonlara tıklama işlevi
  document.addEventListener('keydown', (event) => {
      const key = event.key.toUpperCase();  // Tuşu büyük harfe dönüştür

      // İlgili butonu bul
      const button = document.getElementById(key);

      // Eğer buton varsa, tıkla
      if (button) {
          // Butona tıklama fonksiyonunu çağırıyoruz
          button.click();
          
          // Tıklama efekti ekleme
          button.style.transform = 'translateY(5px)';
          button.style.backgroundColor ='rgb(235, 94, 235)';
          setTimeout(() => {
              button.style.transform = '';
              button.style.backgroundColor = ''; // Arka plan rengini eski haline döndür
          }, 200); // 200ms sonra eski haline döner
      }
  });