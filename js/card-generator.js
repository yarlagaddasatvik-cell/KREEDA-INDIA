/* ==========================================================================
   KREEDA INDIA - ATHLETE DIGITAL ID CARD GENERATOR & EXPORT
   ========================================================================== */

(function () {
  'use strict';

  function initCardGenerator() {
    const nameInput = document.getElementById('reg-fullname');
    const sportSelect = document.getElementById('reg-sport');
    const stateSelect = document.getElementById('reg-state');
    const categorySelect = document.getElementById('reg-category');
    const photoInput = document.getElementById('reg-photo-upload');

    const cardName = document.getElementById('card-athlete-name');
    const cardSport = document.getElementById('card-athlete-sport');
    const cardState = document.getElementById('card-athlete-state');
    const cardIdNumber = document.getElementById('card-id-number');
    const cardPhotoFrame = document.getElementById('card-photo-frame');
    const cardPassType = document.getElementById('card-pass-type');
    const downloadBtn = document.getElementById('btn-download-card');
    const printBtn = document.getElementById('btn-print-card');

    if (!cardName) return; // Not on registration page

    // Generate random serial if not set
    function generateUniqueId() {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let serial = 'KRD-2026-';
      for (let i = 0; i < 4; i++) {
        serial += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return serial;
    }

    const initialId = generateUniqueId();
    if (cardIdNumber) cardIdNumber.textContent = initialId;

    // Live Sync Inputs
    if (nameInput) {
      nameInput.addEventListener('input', function (e) {
        cardName.textContent = e.target.value.trim() || 'ARJUN SHARMA';
      });
    }

    if (sportSelect) {
      sportSelect.addEventListener('change', function (e) {
        const sportName = e.target.options[e.target.selectedIndex]?.text || 'Athletics (Track & Field)';
        cardSport.textContent = sportName;
      });
    }

    if (stateSelect) {
      stateSelect.addEventListener('change', function (e) {
        const stateName = e.target.options[e.target.selectedIndex]?.text || 'Delhi NCR';
        cardState.textContent = stateName;
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener('change', function (e) {
        if (cardPassType) {
          cardPassType.textContent = e.target.value.toUpperCase() + ' PASS';
        }
      });
    }

    // Photo Upload preview
    if (photoInput && cardPhotoFrame) {
      photoInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (event) {
            cardPhotoFrame.innerHTML = `<img src="${event.target.result}" alt="Athlete Photo" style="width: 100%; height: 100%; object-fit: cover;" />`;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Instant HTML5 Canvas Export for ID Card Download
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function () {
        exportCardAsImage();
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', function () {
        window.print();
      });
    }

    function exportCardAsImage() {
      const name = (cardName.textContent || 'Athlete').toUpperCase();
      const sport = (cardSport.textContent || 'Sports').toUpperCase();
      const state = (cardState.textContent || 'India').toUpperCase();
      const idNum = cardIdNumber.textContent || 'KRD-2026-IND';
      const passType = (cardPassType?.textContent || 'NATIONAL TALENT PASS').toUpperCase();

      // Create high-res off-screen canvas
      const canvas = document.createElement('canvas');
      canvas.width = 900;
      canvas.height = 540;
      const ctx = canvas.getContext('2d');

      // Background Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 900, 540);
      bgGrad.addColorStop(0, '#060B1E');
      bgGrad.addColorStop(0.5, '#0B1536');
      bgGrad.addColorStop(1, '#050917');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 900, 540);

      // Gold Metallic Border
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#FFD700';
      ctx.strokeRect(10, 10, 880, 520);

      // Top Tricolor Banner
      ctx.fillStyle = '#FF671F'; // Saffron
      ctx.fillRect(20, 20, 286, 12);
      ctx.fillStyle = '#FFFFFF'; // White
      ctx.fillRect(306, 20, 286, 12);
      ctx.fillStyle = '#046A38'; // Green
      ctx.fillRect(592, 20, 286, 12);

      // Header Brand
      ctx.fillStyle = '#FF671F';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('KREEDA INDIA', 50, 85);

      ctx.fillStyle = '#00E676';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('NATIONAL SPORTS ATHLETE RECOGNITION PASS', 50, 115);

      // Badge
      ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
      ctx.fillRect(660, 55, 190, 45);
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 2;
      ctx.strokeRect(660, 55, 190, 45);
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(passType, 680, 83);

      // Separator
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(50, 140);
      ctx.lineTo(850, 140);
      ctx.stroke();

      // Photo Box
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(50, 170, 220, 260);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.strokeRect(50, 170, 220, 260);

      // Check if user uploaded a photo
      const imgElement = cardPhotoFrame ? cardPhotoFrame.querySelector('img') : null;
      if (imgElement && imgElement.complete) {
        ctx.drawImage(imgElement, 50, 170, 220, 260);
      } else {
        ctx.fillStyle = '#94A3B8';
        ctx.font = '60px sans-serif';
        ctx.fillText('🏃', 135, 310);
      }

      // Athlete Details
      ctx.fillStyle = '#94A3B8';
      ctx.font = '14px sans-serif';
      ctx.fillText('ATHLETE NAME / राष्ट्रीय खिलाड़ी', 310, 200);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(name, 310, 240);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '14px sans-serif';
      ctx.fillText('PRIMARY DISCIPLINE / खेल', 310, 290);

      ctx.fillStyle = '#FF884D';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(sport, 310, 325);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '14px sans-serif';
      ctx.fillText('STATE / FEDERATION', 310, 375);

      ctx.fillStyle = '#00E5FF';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(state, 310, 405);

      // Footer
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.moveTo(50, 450);
      ctx.lineTo(850, 450);
      ctx.stroke();

      ctx.fillStyle = '#94A3B8';
      ctx.font = '14px sans-serif';
      ctx.fillText('NATIONAL ATHLETE UNIQUE ID (UID):', 50, 490);

      ctx.fillStyle = '#00E5FF';
      ctx.font = 'bold 24px monospace';
      ctx.fillText(idNum, 360, 492);

      ctx.fillStyle = '#00E676';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('VERIFIED GOVT OF INDIA SAI RECOGNITION', 560, 492);

      // Trigger Download
      const link = document.createElement('a');
      link.download = `Kreeda-India-Sports-Pass-${idNum}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      if (window.showToast) {
        window.showToast(`Digital Sports Pass for ${name} downloaded successfully!`);
      }
    }
  }

  window.initCardGenerator = initCardGenerator;
  document.addEventListener('DOMContentLoaded', initCardGenerator);
})();
