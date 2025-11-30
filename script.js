// ================== DADOS SIMULADOS
// categoria: areia, louca, patio ==================
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
    descricao: "Piso porcelanato com acabamento amadeirado de alta definição. Textura realista, tonalidade natural e excelente durabilidade. Ideal para ambientes internos que buscam conforto visual e elegância.",
    
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

}
,
{
    nome: "Piso Madeira Premium",
    descricao: "Piso porcelanato com acabamento amadeirado de alta definição. Textura realista, tonalidade natural e excelente durabilidade. Ideal para ambientes internos que buscam conforto visual e elegância.",
    
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

}
];

// ================== GERAR CARDS ==================
const grid = document.getElementById("grid");

function renderCards(lista) {
    grid.innerHTML = "";

    lista.forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.imagens[0]}">
            <h3>${p.nome}</h3>
            <div class="specs">
                <strong>Metragem:</strong> ${p.metragem}<br>
                <strong>Referência:</strong> ${p.referencia}<br>
                <strong>Local:</strong> ${p.local}
            </div>
        `;
        card.onclick = () => openModal(index);
        grid.appendChild(card);
    });
}
renderCards(produtos);

// ================== FILTRAR POR CATEGORIA ==================
function filtrarCategoria(cat) {
    if (cat === 'todas') { renderCards(produtos); return; }
    const filtrado = produtos.filter(p => p.local.toLowerCase() === cat);
    renderCards(filtrado);
}

// Abrir/fechar sidebar
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
toggleSidebar.onclick = () => {
    sidebar.classList.toggle('active');
    overlaySidebar.classList.toggle('active');
};

// Fechar ao clicar fora
const overlaySidebar = document.getElementById('overlaySidebar');
overlaySidebar.onclick = () => {
    sidebar.classList.remove('active');
    overlaySidebar.classList.remove('active');
}; () => sidebar.classList.toggle('active');
// ================== button de fecha aba lateral ==================
document.querySelector('.close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
});


// ================== PESQUISA ==================
document.getElementById("search").addEventListener("input", e => {
    const termo = e.target.value.toLowerCase();
    const filtrado = produtos.filter(p => p.nome.toLowerCase().includes(termo));
    renderCards(filtrado);
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

    galleryTrack.innerHTML = produtoAtual.imagens.map(src => `<img src="${src}">`).join("");

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

modal.onclick = e => { if (e.target === modal) modal.classList.remove("active"); };

// ================== SETAS ==================
document.getElementById("arrowLeft").onclick = () => {
    if (imgIndex > 0) imgIndex--;
    updateGallery();
};

document.getElementById("arrowRight").onclick = () => {
    if (imgIndex < produtoAtual.imagens.length - 1) imgIndex++;
    updateGallery();
};

function updateGallery() {
    galleryTrack.style.transform = `translateX(${-imgIndex * 100}%)`;
}

// ================== GESTOS (PINCH E SWIPE) ==================
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
    if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
    }

    if (e.touches.length === 2) {
        initialDistance = dist(e);
    }
});


gallery.addEventListener("touchmove", e => {
    e.preventDefault();

    if (e.touches.length === 1) {
        let diff = e.touches[0].clientX - startX;
        if (diff > 50 && imgIndex > 0) {
            imgIndex--;
            updateGallery();
            startX = e.touches[0].clientX;
        } else if (diff < -50 && imgIndex < produtoAtual.imagens.length - 1) {
            imgIndex++;
            updateGallery();
            startX = e.touches[0].clientX;
        }
    }

    if (e.touches.length === 2) {
        let newDist = dist(e);
        currentScale = Math.min(Math.max((newDist / initialDistance), 1), 3);
        galleryTrack.style.transform = `scale(${currentScale}) translateX(${-imgIndex * 100 / currentScale}%)`;
    }
}, { passive: false });

//novo sistema
