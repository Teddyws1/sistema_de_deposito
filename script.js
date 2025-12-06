// categoria: areia, louca, patio ================== //
const produtos = [
    {
        nome: "Piso Porcelanato Branco",
        descricao: "Piso de alta resistência para áreas internas.",
        metragem: "60x60",
        referencia: "000123",
        local: "Pátio",
        peso: "32kg",
        marca: "delta",
        imagens: ["https://picsum.photos/600/400?1", "https://picsum.photos/600/400?2"]
    },
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        fabricante: "WoodFloor Professional Series",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/5y4fdpk4/Captura-de-Tela-(36).png",
            "https://i.postimg.cc/5y4fdpk4/Captura-de-Tela-(36).png"
        ]
    }
    ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
        ]
    }
     ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
        ]
    } ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
        ]
    } ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
        ]
    } ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
        ]
    } ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Piso porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
        ]
    } ,
    {
        nome: "Piso Madeira Premium",
        descricao: "Pisos porcelanato com acabamento amadeirado de alta definição.",
        metragem: "20 x 1920 mm",
        referencia: "000876",
        local: "Categoria: Areia",
        peso: "27 kg",
        marca: "delta",
        lote: "C32 - Seleção Premium",
        imagens: [
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://i.postimg.cc/g0vN1FwV/Captura-de-Tela-(36).png",
            "https://i.postimg.cc/V6mD8GM4/Captura-de-Tela-(37).png",
            "https://i.postimg.cc/1tsJQC6Y/Captura-de-Tela-(41).png",
            "https://i.postimg.cc/JnMPL6JT/Captura-de-Tela-(42).png",
            "https://i.postimg.cc/pTCkXfY0/Captura-de-Tela-(43).png",
         
        ]
    }
];


// ================== GERAR CARDS ==================
const grid = document.getElementById("grid");
if (!grid) console.warn("Elemento #grid não encontrado.");

function renderCards(lista) {
    if (!grid) return;

    if (!Array.isArray(lista)) lista = [];

    grid.innerHTML = "";

    const placeholder = "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>
        <rect width='100%' height='100%' fill='#eaeaea'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
        fill='#999' font-size='20'>Sem imagem</text></svg>`);

    lista.forEach((p = {}, index) => {

        const nome = p.nome ?? "Sem nome";
        const metragem = p.metragem ?? "—";
        const referencia = p.referencia ?? "—";
        const local = p.local ?? "—";
        const imgSrc = (Array.isArray(p.imagens) && p.imagens[0]) ? p.imagens[0] : placeholder;

        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("role", "button");
        card.dataset.index = index;

        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "card-img";
        img.alt = nome;

        const h3 = document.createElement("h3");
        h3.textContent = nome;

        const specs = document.createElement("div");
        specs.className = "specs";
        specs.innerHTML = `
            <strong>Metragem:</strong> ${metragem}<br>
            <strong>Referência:</strong> ${referencia}<br>
            <strong>Local:</strong> ${local}
        `;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(specs);

        // abrir modal
        card.addEventListener("click", () => openModal(index));

        // Enter abre
        card.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(index);
            }
        });

        // abrir imagem original
        img.addEventListener("dblclick", e => {
            e.stopPropagation();
            if (typeof openFullImage === "function") openFullImage(imgSrc);
        });

        grid.appendChild(card);
    });
}

renderCards(produtos);

///barra de 



// ================== FILTRAR ==================
function filtrarCategoria(cat) {
    if (cat === "todas") return renderCards(produtos);
    renderCards(produtos.filter(p => p.local.toLowerCase() === cat));
}


// ================== SIDEBAR ==================
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
const overlaySidebar = document.getElementById('overlaySidebar');

toggleSidebar.onclick = () => {
    sidebar.classList.toggle('active');
    overlaySidebar.classList.toggle('active');
};

overlaySidebar.onclick = () => {
    sidebar.classList.remove('active');
    overlaySidebar.classList.remove('active');
};

document.querySelector('.close-sidebar')
    .addEventListener('click', () => sidebar.classList.remove('active'));


// ================== PESQUISA ==================
document.getElementById("search_acho").addEventListener("input", e => {
    const termo = e.target.value.toLowerCase();
    renderCards(produtos.filter(p => p.nome.toLowerCase().includes(termo)));
});


// ================== MODAL ==================
const modal = document.getElementById("modal");
const galleryTrack = document.getElementById("galleryTrack");
const modalDetails = document.getElementById("modalDetails");
let imgIndex = 0;
let produtoAtual;

function openModal(i) {
    produtoAtual = produtos[i];
    imgIndex = 0;

    galleryTrack.innerHTML =
        produtoAtual.imagens.map(src => `<img src="${src}">`).join("");

    modalDetails.innerHTML = `
        <h3>${produtoAtual.nome}</h3>
        <p>${produtoAtual.descricao}</p><br>
        <strong>Metragem:</strong> ${produtoAtual.metragem}<br>
        <strong>Referência:</strong> ${produtoAtual.referencia}<br>
        <strong>Local:</strong> ${produtoAtual.local}<br>
        <strong>Peso:</strong> ${produtoAtual.peso}<br>
        <strong>marca:</strong> ${produtoAtual.marca}<br>
        <strong>Lote:</strong> ${produtoAtual.lote}<br>
    `;

    modal.classList.add("active");
    updateGallery();
}

modal.onclick = e => {
    if (e.target === modal) modal.classList.remove("active");
};

document.getElementById("arrowRight").onclick = () => {
    if (imgIndex < produtoAtual.imagens.length - 1) imgIndex++;
    updateGallery();
};

function updateGallery() {
    galleryTrack.style.transform = `translateX(${-imgIndex * 100}%)`;
}


// =====================================================
//        NOVO SISTEMA — 100% COMPATÍVEL
// =====================================================

// ⭐ Duplo clique no painel de detalhes → fecha o modal
modalDetails.addEventListener("dblclick", () => {
    modal.classList.remove("active");
});

// ⭐ Navegação por teclado (setas)
document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("active")) return;

    if (event.key === "ArrowRight" && imgIndex < produtoAtual.imagens.length - 1) {
        imgIndex++;
        updateGallery();
    }

    if (event.key === "ArrowLeft" && imgIndex > 0) {
        imgIndex--;
        updateGallery();
    }
});

// ⭐ Scroll do mouse troca imagens com efeitos avançados
modal.addEventListener("wheel", (event) => {
    event.preventDefault(); // impede a página de rolar

    const imagens = galleryTrack.querySelectorAll("img");

    // remove classes antigas
    imagens.forEach(img => img.classList.remove("img-enter", "img-exit"));

    let oldIndex = imgIndex;

    // INVERTE O SCROLL
    if (event.deltaY < 0) {
        // scroll para cima → vai para direita
        if (imgIndex < produtoAtual.imagens.length - 1) imgIndex++;
        else {
            galleryTrack.classList.add("bounce");
            setTimeout(() => galleryTrack.classList.remove("bounce"), 350);
            return;
        }
    } else {
        // scroll para baixo → vai para esquerda
        if (imgIndex > 0) imgIndex--;
        else {
            galleryTrack.classList.add("bounce");
            setTimeout(() => galleryTrack.classList.remove("bounce"), 350);
            return;
        }
    }

    // anima imagem antiga e nova
    imagens[oldIndex].classList.add("img-exit");
    imagens[imgIndex].classList.add("img-enter");

    updateGallery();
}, { passive: false });

//sistema novo


// Desabilita o scroll da página enquanto o modal está aberto
function disablePageScroll() {
    document.body.style.overflow = "hidden";
}

// Habilita quando fechar
function enablePageScroll() {
    document.body.style.overflow = "";
}

// Abre modal → bloqueia scroll
function openModal(i) {
    produtoAtual = produtos[i];
    imgIndex = 0;

    galleryTrack.innerHTML = produtoAtual.imagens
        .map(src => `<img src="${src}">`)
        .join("");

    modalDetails.innerHTML = `
        <h3>${produtoAtual.nome}</h3>
        <p>${produtoAtual.descricao}</p><br>
        <strong>Metragem:</strong> ${produtoAtual.metragem}<br>
        <strong>Referência:</strong> ${produtoAtual.referencia}<br>
        <strong>Local:</strong> ${produtoAtual.local}<br>
        <strong>Peso:</strong> ${produtoAtual.peso}<br>
        <strong>marca:</strong> ${produtoAtual.marca}<br>
        <strong>Lote:</strong> ${produtoAtual.lote}<br>
    `;

    modal.classList.add("active");
    disablePageScroll();   // <--- bloqueia scroll da página

    updateGallery();
}

// Fechar modal → volta o scroll
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        enablePageScroll();  // <--- libera scroll novamente
    }
});


// =====================================================
//        GESTOS (SWIPE + PINCH)
// =====================================================
let startX = 0;
let currentScale = 1;
let initialDistance = 0;

const gallery = document.querySelector(".gallery");

function dist(e) {
    return Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
    );
}

gallery.addEventListener("touchstart", e => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
    if (e.touches.length === 2) initialDistance = dist(e);
});

gallery.addEventListener("touchmove", e => {
    e.preventDefault();

    // swipe
    if (e.touches.length === 1) {
        const diff = e.touches[0].clientX - startX;
        if (diff > 50 && imgIndex > 0) {
            imgIndex--; updateGallery(); startX = e.touches[0].clientX;
        }
        if (diff < -50 && imgIndex < produtoAtual.imagens.length - 1) {
            imgIndex++; updateGallery(); startX = e.touches[0].clientX;
        }
    }


}, { passive: false });

//sistema de anti-bug de blue

(function () {
    // roda quando DOM pronto — evita sobrescrever window.onload
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    function init() {
        // referências flexíveis: tenta ids primeiro, depois classes
        const sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
        const overlay = document.getElementById("overlaySidebar") || document.querySelector("#overlaySidebar") || document.querySelector(".overlay");

        // abre: aceita vários botões (ex.: .toggle-btn, [data-open-sidebar], #openSidebar)
        const openBtns = Array.from(document.querySelectorAll('[data-open-sidebar], .toggle-btn, #openSidebar'));

        // fecha: aceita vários (botão X, elementos com data-close, etc)
        const closeBtns = Array.from(document.querySelectorAll('[data-close-sidebar], .close-sidebar, #closeSidebar'));

        // se não existir sidebar/overlay, sai sem mexer em nada
        if (!sidebar || !overlay) return;

        // função para abrir (somente add, sem toggle)
        function openSidebar(ev) {
            // não bloquear outros handlers
            sidebar.classList.add("active");
            overlay.classList.add("active");
        }

        // função para fechar (somente remove)
        function closeSidebar(ev) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }

        // adiciona listeners sem sobrescrever outros
        openBtns.forEach(btn => btn.addEventListener("click", openSidebar, { passive: true }));
        closeBtns.forEach(btn => btn.addEventListener("click", closeSidebar, { passive: true }));

        // clicar no overlay fecha também
        overlay.addEventListener("click", function (ev) {
            if (ev.target === overlay) closeSidebar();
        }, { passive: true });
    }
})();


// --- BLOQUEAR CTRL + ZOOM (desktop)
document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('keydown', function (e) {
    // bloquear ctrl + +  / ctrl + -  / ctrl + 0
    if (e.ctrlKey && (
        e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0'
    )) {
        e.preventDefault();
    }
});

// --- BLOQUEAR DOUBLE TAP ZOOM
let lastTouch = 0;
document.addEventListener('touchend', function (e) {
    const now = new Date().getTime();
    if (now - lastTouch < 300) {
        e.preventDefault();
    }
    lastTouch = now;
}, { passive: false });

// --- CERTIFICAR META VIEWPORT FIXA
(function fixViewport() {
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "viewport";
        document.head.appendChild(meta);
    }
    meta.content = "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1";
})();


/////scrol do details

document.addEventListener("DOMContentLoaded", () => {

    const details = document.querySelector(".details");       // área azul
    const gallery = document.querySelector(".gallery-track"); // área de cima

    let inDetails = false;
    let inGallery = false;

    /* -------------------------
       DETECTAR ENTRADA / SAÍDA
    ------------------------- */

    // Desktop
    details.addEventListener("mouseenter", () => {
        inDetails = true;
        inGallery = false;
    });

    details.addEventListener("mouseleave", () => {
        inDetails = false;
    });

    gallery.addEventListener("mouseenter", () => {
        inGallery = true;
        inDetails = false;
    });

    gallery.addEventListener("mouseleave", () => {
        inGallery = false;
    });

    /* -------------------------
       BLOQUEAR SCROLL ENTRE ÁREAS
    ------------------------- */

    // SCROLL na área azul → só rola o texto
    details.addEventListener("wheel", e => {
        e.stopPropagation();  // impede passar pra galeria
    }, { passive: false });

    // SCROLL na área de cima → só mexe galeria
    gallery.addEventListener("wheel", e => {
        if (inDetails) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    }, { passive: false });

    /* -------------------------
       SUPORTE MOBILE (TOUCH)
    ------------------------- */

    details.addEventListener("touchmove", e => {
        e.stopPropagation();
    }, { passive: false });

    gallery.addEventListener("touchmove", e => {
        if (inDetails) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    }, { passive: false });

});

//sistema novo 
document.addEventListener('DOMContentLoaded', function () {

    const gallery = document.getElementById('galleryTrack');
    if (!gallery) {
        console.error('galleryTrack não encontrado');
        return;
    }

    function getImages() {
        return Array.from(gallery.querySelectorAll('img'));
    }

    let currentIndex = 0;
    let startX = 0;

    // ===== MODAL =====
    const overlay = document.createElement('div');
    overlay.id = 'img-original-overlay';

    Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '99999',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });

    const modalImg = document.createElement('img');

    Object.assign(modalImg.style, {
        maxWidth: '95vw',
        maxHeight: '95vh',
        objectFit: 'contain',
        transition: 'transform .3s ease, opacity .3s ease',
        transform: 'scale(.85)',
        opacity: '0'
    });

    overlay.appendChild(modalImg);
    document.body.appendChild(overlay);

    // ===== ABRIR (1 CLIQUE) =====
    gallery.addEventListener('click', function (e) {
        if (e.target.tagName !== 'IMG') return;

        const images = getImages();
        const index = images.indexOf(e.target);
        openModal(index);
    });

    function openModal(index) {
        const images = getImages();
        if (!images[index]) return;

        currentIndex = index;

        modalImg.style.opacity = '0';
        modalImg.style.transform = 'scale(.85)';
        modalImg.src = images[currentIndex].src;

        overlay.style.display = 'flex';

        modalImg.onload = () => {
            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
                modalImg.style.opacity = '1';
                modalImg.style.transform = 'scale(1)';
            });
        };
    }

    // ===== FECHAR =====
    function closeModal() {
        overlay.style.opacity = '0';
        modalImg.style.opacity = '0';
        modalImg.style.transform = 'scale(.85)';

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }

    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ===== TROCA POR SCROLL INVERTIDO =====
    overlay.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY > 0) prevImage();   // scroll para baixo = imagem anterior
        else nextImage();                 // scroll para cima = próxima imagem
    }, { passive: false });

    // ===== SWIPE MOBILE =====
    overlay.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    overlay.addEventListener('touchend', function (e) {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextImage();
            else prevImage();
        }
    });

    // ===== PRÓXIMA (SEM LOOP) =====
    function nextImage() {
        const images = getImages();
        if (currentIndex < images.length - 1) {
            modalImg.classList.add('switching');

            setTimeout(() => {
                currentIndex++;
                modalImg.src = images[currentIndex].src;
                modalImg.onload = () => modalImg.classList.remove('switching');
            }, 150);
        }
    }

    // ===== ANTERIOR (SEM LOOP) =====
    function prevImage() {
        const images = getImages();
        if (currentIndex > 0) {
            modalImg.classList.add('switching');

            setTimeout(() => {
                currentIndex--;
                modalImg.src = images[currentIndex].src;
                modalImg.onload = () => modalImg.classList.remove('switching');
            }, 150);
        }
    }

});
//sisteam web app

 if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("SW registrado!"))
      .catch(err => console.error("Erro:", err));
  }

  
