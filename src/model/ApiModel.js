
export async function postData(file, answers) {
  const formData = new FormData();
  formData.append('file', file);

  for (const key in answers) {
    formData.append(key, answers[key]);
  }

  // cek semua isian FormData satu per satu
  for (let [key, value] of formData.entries()) {
    console.log( key, 'value:', value);
  }

  try {
    const response = await fetch('http://103.151.145.180:3000/terima', {
      method: 'POST',
      body: formData,
    });
    console.log('form file'+formData.file);
    console.log('form answer'+formData.answers);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const result = await response.json();
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error('Fetch gagal:', error);
    throw error;
  }
}

export async function getQuestion() {
	const response = await fetch('http://103.151.145.180:3000/pertanyaan/');
	const data = await response.json();
	return data;
}

// export async function getQuestion() {
//   // ganti ini dengan fetch kalau server hidup
//   return [
//     { text: "1. Apakah terlihat komedo hitam di permukaan kulit?" },
//     { text: "2. Apakah terdapat titik putih kecil?" },
//     { text: "3. Apakah jerawat berisi nanah?" },
//     { text: "4. Apakah muncul benjolan merah tanpa nanah?" },
//     { text: "5. Apakah benjolan cukup besar atau dalam?" },
//     { text: "6. Apakah terasa nyeri saat disentuh?" },
//     { text: "7. Apakah area sekitar jerawat terlihat kemerahan?" },
//     { text: "8. Apakah jerawat menyatu membentuk area luas?" },
//     { text: "9. Apakah tekstur jerawat terasa keras saat disentuh?" }
//   ];
// }
