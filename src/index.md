---
layout: base.njk
title: Beranda
---

<div class="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 shadow-md mb-12 border-l-8 border-yellow-500 relative overflow-hidden">
    <div class="max-w-3xl relative z-10">
        <span class="bg-yellow-500 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Portal Resmi</span>
        <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Mewujudkan Masyarakat <br class="hidden md:inline">
            <span class="text-yellow-400">Tanggap Informasi</span> & Berdaya
        </h2>
        <p class="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
            Selamat Datang di Portal Resmi Kelompok Informasi Masyarakat (KIM) Bumantara, Kalurahan Depok, Panjatan. Wadah komunikasi, penyebaran berita positif, penangkal hoax, dan ruang aspirasi bagi seluruh warga.
        </p>
        <div class="flex flex-wrap gap-3">
            <a href="/profil/visi-misi/" class="bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg shadow transition transform hover:-translate-y-0.5 text-sm">Tentang Kami</a>
            <a href="/aduan/" class="bg-blue-950/40 hover:bg-blue-950/60 border border-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition text-sm">Sampaikan Aduan</a>
        </div>
    </div>
</div>

<section class="mb-12">
    <div class="text-center max-w-xl mx-auto mb-8">
        <h3 class="text-2xl font-bold text-slate-800">Layanan & Konten Berbasis Masyarakat</h3>
        <p class="text-sm text-slate-500 mt-1">Akses cepat ke berbagai program kerja dan pusat informasi KIM Bumantara.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-400 transition group">
            <div class="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center font-bold mb-4 group-hover:bg-blue-900 group-hover:text-white transition">📰</div>
            <h4 class="font-bold text-slate-800 mb-1">Kabar Berita</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Informasi seputar kegiatan Kalurahan, pengumuman resmi, dan dinamika sosial masyarakat.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-400 transition group">
            <div class="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center font-bold mb-4 group-hover:bg-blue-900 group-hover:text-white transition">🌾</div>
            <h4 class="font-bold text-slate-800 mb-1">Potensi Desa</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Eksplorasi UMKM lokal, sektor pertanian unggulan, pariwisata, seni, dan budaya warga Depok.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-400 transition group">
            <div class="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center font-bold mb-4 group-hover:bg-blue-900 group-hover:text-white transition">🛡️</div>
            <h4 class="font-bold text-slate-800 mb-1">Cegah Hoax</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Edukasi literasi digital, klarifikasi isu miring, serta penyaringan informasi palsu.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-400 transition group">
            <div class="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center font-bold mb-4 group-hover:bg-blue-900 group-hover:text-white transition">📢</div>
            <h4 class="font-bold text-slate-800 mb-1">Aspirasi & Aduan</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Sampaikan masukan konstruktif untuk pembangunan pelayanan publik tingkat Kalurahan.</p>
        </div>
    </div>
</section>

<section class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
    <div class="flex justify-between items-end mb-6 pb-4 border-b border-slate-100">
        <div>
            <h3 class="text-xl font-bold text-slate-800">Berita & Pengumuman Terbaru</h3>
            <p class="text-xs text-slate-400 mt-0.5">Pantau terus kabar terkini dari pengurus KIM Bumantara.</p>
        </div>
        <a href="/berita/" class="text-xs font-bold text-blue-900 hover:text-yellow-600 transition flex items-center space-x-1">
            <span>Lihat Semua</span>
            <span>&rarr;</span>
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {% if collections.berita %}
        {% for post in collections.berita %}
            <article class="p-4 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100 flex flex-col justify-between">
                <div>
                    <h4 class="text-lg font-bold text-slate-800 hover:text-blue-900 transition mb-2">
                        <a href="{{ post.url }}">{{ post.data.title }}</a>
                    </h4>
                    <p class="text-xs text-slate-400 mb-3 flex items-center space-x-2">
                        <span>🗓️ {{ post.date | date: "%d-%m-%Y" }}</span>
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed">{{ post.data.excerpt }}</p>
                </div>
                <div class="mt-4">
                    <a href="{{ post.url }}" class="text-xs font-semibold text-blue-800 hover:underline">Baca Selengkapnya &rarr;</a>
                </div>
            </article>
        {% endfor %}
    {% else %}
        <div class="col-span-2 text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <span class="text-3xl">📝</span>
            <p class="text-sm font-medium text-slate-500 mt-2">Belum ada postingan berita terbaru.</p>
            <p class="text-xs text-slate-400 mt-0.5">Berita yang diisi oleh pengurus melalui CMS akan otomatis muncul di sini nanti.</p>
        </div>
    {% endif %}
    </div>
</section>