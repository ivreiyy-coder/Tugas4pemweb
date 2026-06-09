// Fungsi Permainan
function myGame() {

    // Fitur 1: Input nama pemain
    let yourName = prompt("Masukkan nama kamu:");
    alert("Halo, " + yourName + "! Selamat datang di Game Kuis.");

    // Fitur 2: Sistem skor
    let skor = 0;

    while (true) {
        let lanjut = confirm("Lanjutkan Bermain?");

        if (lanjut == true) {

            // Pertanyaan pertama
            let quest1 = prompt("2 + 2 = ?");

            if (quest1 == 4) {
                alert("Benar!");
                skor += 10;
            } else {
                alert("Yah salah!");
                alert("Skor akhir kamu: " + skor);
                break;
            }

            // Pertanyaan kedua
            let quest2 = prompt("9 x 12 = ?");

            if (quest2 == 108) {
                alert("Benar lagi!");
                skor += 10;

                alert(
                    "Selamat " + yourName +
                    "! Semua jawaban kamu benar.\n" +
                    "Skor akhir: " + skor
                );
            } else {
                alert("Yah salah!");
                alert("Skor akhir kamu: " + skor);
                break;
            }

        } else {
            alert("Terima kasih sudah bermain, " + yourName + "!");
            break;
        }
    }
}

myGame();