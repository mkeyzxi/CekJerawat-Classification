// ApiModel.js
// export async function postData(imageFile, answers) {
//   const formData = new FormData();
//   formData.append('file', imageFile);

//   for (const [key, value] of Object.entries(answers)) {
//     formData.append(key, value);
//   }
//   console.log(formData)
//   const response = await fetch('http://103.151.145.180:3000/terima', {
//     method: "POST",
//     body: formData, // Jangan set Content-Type secara manual
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   return response.json();
// }

export async function postData(imageFile, answers) {
  const formData = new FormData();
  formData.append('file', imageFile);

  for (const [key, value] of Object.entries(answers)) {
    formData.append(key, value);
  }

  // 🧪 Tampilkan semua isi formData
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  try {
    // const response = await fetch('http://103.151.145.180:3000/terima', {
    const response = await fetch('http://103.151.145.180:3000/terima', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Fetch gagal:', err);
    throw err;
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
