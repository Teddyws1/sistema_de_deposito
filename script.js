// categoria: areia, louca, patio ================== //
const produtos = [
    {
        nome: "Piso Porcelanato Branco",
        descricao: "Piso de alta resistência para áreas internas.",
        metragem: "60x60",
        referencia: "000123",
        local: "Pátio",
        peso: "32kg",
        fabricante: "Cerâmicas Brasil",
        lote: "A45",
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
            "https://picsum.photos/600/400?3",
            "https://picsum.photos/600/400?4"
        ]
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
            "https://i.postimg.cc/RFk26DZT/Captura-de-Tela-(38).png",
            "https://picsum.photos/600/400?4"
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
document.getElementById("search").addEventListener("input", e => {
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
        <strong>Fabricante:</strong> ${produtoAtual.fabricante}<br>
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
        <strong>Fabricante:</strong> ${produtoAtual.fabricante}<br>
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

    // pinch zoom
    if (e.touches.length === 2) {
        const newDist = dist(e);
        currentScale = Math.min(Math.max(newDist / initialDistance, 1), 3);
        galleryTrack.style.transform =
            `scale(${currentScale}) translateX(${-imgIndex * 100 / currentScale}%)`;
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

// --- BLOQUEAR PINCH ZOOM (mobile)
document.addEventListener('touchmove', function (e) {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });

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


///////////////////////ddd


//sistema novo 
