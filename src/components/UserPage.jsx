import React from "react";

function UserPage() {
  return (
    <div>
      <div class="container">
        <h1>Halaman User</h1>

        <div class="row">
          <div class="col-md-3">
            <img
              src="assets/user.jpg"
              class="img-responsive img-circle"
              alt="User"
            />
          </div>
          <div class="col-md-9">
            <h2>Nama Pengguna</h2>
            <p>Email: user@example.com</p>
            <p>Tanggal Bergabung: 01 Januari 2021</p>
          </div>
        </div>

        <h2>Kursus yang diambil</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Nama Kursus</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Belajar HTML & CSS</td>
              <td>Selesai</td>
              <td>
                <a href="#" class="btn btn-primary">
                  Lihat Hasil
                </a>
              </td>
            </tr>
            <tr>
              <td>Belajar HTML & CSS</td>
              <td>Selesai</td>
              <td>
                <a href="#" class="btn btn-primary">
                  Lihat Hasil
                </a>
              </td>
            </tr>
            <tr>
              <td>Belajar HTML & CSS</td>
              <td>Selesai</td>
              <td>
                <a href="#" class="btn btn-primary">
                  Lihat Hasil
                </a>
              </td>
            </tr>
            <tr>
              <td>Belajar HTML & CSS</td>
              <td>Selesai</td>
              <td>
                <a href="#" class="btn btn-primary">
                  Lihat Hasil
                </a>
              </td>
            </tr>
            <tr>
              <td>Belajar JavaScript</td>
              <td>Dalam Proses</td>
              <td>
                <a href="#" class="btn btn-primary">
                  Lanjut Belajar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;
