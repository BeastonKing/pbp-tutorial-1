const xhttp = new XMLHttpRequest();

xhttp.onload = () => {
    let dataJson = JSON.parse(xhttp.responseText);
    const mainTable = document.getElementById('isi-tabel');

    for (let i = 0; i < dataJson.length; i++) {
        const thDeskripsi = document.createElement('th');
        const thNama = document.createElement('th');
        const thHarga = document.createElement('th');
        const tr = document.createElement('tr');

        // const childData = document.createTextNode(dataJson[i]);
        
        const deskripsi = document.createTextNode(dataJson[i].fields.deskripsi);
        const harga_barang = document.createTextNode(dataJson[i].fields['harga_barang']);
        const nama_barang = document.createTextNode(dataJson[i].fields['nama_barang']);

        thDeskripsi.appendChild(deskripsi);
        thHarga.appendChild(harga_barang);
        thNama.appendChild(nama_barang);

        tr.appendChild(thNama);
        tr.appendChild(thHarga);
        tr.appendChild(thDeskripsi);
        mainTable.appendChild(tr);
    }

    console.log(dataJson[2]);
    console.log(dataJson[2].fields['nama_barang']);
};

xhttp.open('GET', '../json/');
xhttp.send();