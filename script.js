// Menampilkan informasi pop-up
function showInfo(destinasi) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");
    const image = document.getElementById("popup-image");

    const destinasiData = {
        "pantai-pink": {
            title: "Pantai Pink",
            text: "Pantai Pink terletak di Pulau Komodo, Nusa Tenggara Timur. Pantai ini dikenal karena keunikan pasirnya yang berwarna merah muda, hasil dari pecahan karang merah yang bercampur dengan pasir putih. Tempat ini menawarkan suasana tenang dengan pemandangan laut biru yang memukau, cocok untuk bersantai dan menjelajahi keindahan alam bawah laut.",
            image: "P-pink.png"
        },
        "pantai-kuta": {
            title: "Pantai Kuta",
            text: "Pantai Kuta berada di Pulau Bali, tepatnya di Kecamatan Kuta, Kabupaten Badung. Pantai ini terkenal sebagai pusat wisata dengan ombak yang ideal untuk berselancar. Selain itu, Pantai Kuta juga menawarkan pemandangan matahari terbenam yang menakjubkan, menjadikannya salah satu destinasi favorit wisatawan lokal maupun internasional.",
            image: "P-kuta.png"
        },
        "pantai-parangtritis": {
            title: "Pantai Parangtritis",
            text: "Pantai Parangtritis terletak sekitar 27 km dari pusat Kota Yogyakarta. Pantai ini memiliki pasir vulkanik hitam yang khas dan terkenal dengan suasana mistisnya yang sarat legenda. Pengunjung dapat menikmati pemandangan laut yang indah, menjelajahi gumuk pasir, atau sekadar bersantai sambil menikmati angin laut.",
            image: "P-parangtritis.png"
        },
        "gunung-rinjani": {
            title: "Gunung Rinjani",
            text: "Gunung Rinjani berada di Pulau Lombok, Nusa Tenggara Barat, dan merupakan gunung berapi kedua tertinggi di Indonesia. Puncak Rinjani menawarkan pemandangan spektakuler, termasuk Danau Segara Anak yang berada di kawahnya. Destinasi ini menjadi favorit para pendaki dan pecinta alam dari seluruh dunia.",
            image: "G-rinjani.png"
        },
        "gunung-bromo": {
            title: "Gunung Bromo",
            text: "Gunung Bromo terletak di kawasan Taman Nasional Bromo Tengger Semeru, Jawa Timur. Gunung ini dikenal dengan keindahan matahari terbitnya yang menakjubkan. Selain itu, wisatawan dapat menjelajahi Laut Pasir, sebuah area pasir vulkanik luas yang mengelilingi gunung ini.",
            image: "G-bromo.png"
        },
        "gunung-merapi": {
            title: "Gunung Merapi",
            text: "Gunung Merapi adalah salah satu gunung berapi paling aktif di Indonesia, terletak di perbatasan Jawa Tengah dan Yogyakarta. Tempat ini menawarkan pengalaman wisata pendakian yang menantang, pemandangan alam yang indah, serta cerita sejarah dari letusan-letusan besar di masa lalu.",
            image: "G-merapi.png"
        },
        "candi-borobudur": {
            title: "Candi Borobudur",
            text: "Candi Borobudur terletak di Magelang, Jawa Tengah, sekitar 40 km dari Yogyakarta. Candi ini adalah salah satu keajaiban dunia, dengan arsitektur megah dan relief yang menceritakan kehidupan Buddha. Destinasi ini menawarkan pengalaman spiritual sekaligus wisata sejarah yang mendalam.",
            image: "B-borobudur.png"
        },
        "keraton-yogyakarta": {
            title: "Keraton Yogyakarta",
            text: "Keraton Yogyakarta adalah istana resmi Kesultanan Yogyakarta, terletak di pusat Kota Yogyakarta. Bangunan ini adalah simbol kebudayaan Jawa yang kental, dengan berbagai koleksi seni, sejarah, dan tradisi yang terus dijaga hingga saat ini.",
            image: "B-keraton.png"
        },
        "desa-penglipuran": {
            title: "Desa Wisata Penglipuran",
            text: "Desa Penglipuran terletak di Kabupaten Bangli, Bali, dan dikenal sebagai salah satu desa terbersih di dunia. Desa ini memiliki tata ruang yang khas dengan arsitektur tradisional Bali yang tetap terjaga. Pengunjung dapat merasakan suasana kehidupan desa yang damai dan budaya Bali yang autentik.",
            image: "B-panglipuran.png"
        }
    };

    if (destinasiData[destinasi]) {
        const data = destinasiData[destinasi];
        title.innerText = data.title;
        text.innerText = data.text;
        image.src = data.image;
        popup.style.display = "flex";
    }
}

// Menutup pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}


// Navigasi otomatis dari dropdown
const searchForm = document.getElementById("search-form");
if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const kategori = document.getElementById("kategori").value;
        const kategoriMap = {
            pantai: "#pantai",
            gunung: "#gunung",
            budaya: "#budaya",
        };
        const destinationUrl = `destinasi.html${kategoriMap[kategori] || ""}`;
        window.location.href = destinationUrl;
    });
}

// Menambahkan ulasan pelanggan secara otomatis
const ulasanForm = document.getElementById("ulasan-form");
if (ulasanForm) {
    ulasanForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nama = document.getElementById("nama").value;
        const ulasan = document.getElementById("ulasan").value;
        const listUlasan = document.getElementById("list-ulasan");

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${nama}:</strong> ${ulasan}`;
        listUlasan.appendChild(listItem);

        ulasanForm.reset();
    });
}