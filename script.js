const variableDefinitions = {
    empresa: {
        "Razão Social": { var: "aRazSoc", init: "@Razão Socia@\nDefinir alfa aRazSoc;\naRazSoc = R014EMP.NomEmp;\n" },
        "Apelido":      { var: "aApeEmp", init: "@Apelido da Empresa@\nDefinir alfa aApeEmp;\naApeEmp = R014EMP.NomApe;\n" },
        "CNPJ":         { var: "aNumCgc", init: "@CNPJ da empresa@\nDefinir alfa aNumCgc;\nConverteMascara (1,R030Fil.NumCgc,aNumCGC,\"99.999.999/9999-99\");\n" },
        "Endereço":     { var: "aNomCid + \"-\" + aNomEst + \" \" + aEndFil + \"N° \" + nNumeroEmp + \" BAIRRO \" +  aBaiNom", init: "@Endereço da Filial@\nDefinir alfa aEndEmp;\nDefinir Alfa aNomCid;\naNomCid = R074CID.NomCid;\nDefinir Alfa aNomEst;\naNomEst = R074CID.EstCid;\nDefinir Alfa aEndFil;\naEndFil = R030FIL.EndFil ;\nDefinir Alfa aFilNum;\naFilNum = R030FIL.EndNum ;\nDefinir Alfa nNumeroEmp;\nnNumeroEmp = R030FIL.EndNum;\nDefinir Alfa aBaiNom; \n aBaiNom = R074BAI.NomBai ;\nDefinir Alfa aEstCtp;\naEstCtp = R034FUN.EstCtp ;\nEndEmp = aNomCid + \"-\" + aNomEst + \" \" + aEndFil + \"N° \" + nNumeroEmp + \" BAIRRO \" +  aBaiNom;\n" }, 
    },
    colaborador: {
        "Nome":                  { var: "aNomCol", init: "@Nome do Colaborador@\nDefinir alfa aNomCol;\naNomCol = R034FUN.NomFun;\n" },
        "CPF":                   { var: "aNumCPF", init: "@Número de CPF@\nDefinir alfa aNumCPF;\nConverteMascara (1,R034FUN.NumCpf,aNumCPF,\"999.999.999-99\");\n" },
        "Matricula":             { var: "aNumCad", init: "@Número de Matricula@\nDefinir Alfa aNumCad;\nNumeroParaAlfa(R034FUN.NumCad,aNumCad);\n" },
        "Sexo Colaborador":      { var: "aSex", init: "@Sexo do Colaborador@\n" + "Definir Alfa aSex;\n" + "aSex = R034FUN.TipSex;\n" + "se(aSex = \"F\")\n" + "aSex = \"Feminino\";\n" + "se(aSex = \"M\")\n" + "aSex = \"Masculino\";\n" },
        "Data Nascimento":       { var: "aDatNasc", init: "@Data de Nascimento@\n" + "Definir alfa aDatNasc;\n" + "ConverteMascara(3,R034FUN.DatNas,aDatNasc,\"DD/MM/YYYY\");\n" },
        "EstadoCivil":           { var: "aEstCiv", init: "@Estado Civil@\n" + "Definir Numero nEstCiv;\n" + "nEstCiv = R034FUN.EstCiv;\n" + "Definir Alfa aEstCiv;\n" + "Se (nEstCiv = 1)\n" + "aEstCiv = \"Solteiro\";\n" + "Se (nEstCiv = 2)\n" + "aEstCiv = \"Casado\";\n" + "Se (nEstCiv = 3)\n" + "aEstCiv = \"Divorciado\";\n" + "Se (nEstCiv = 4)\n" + "aEstCiv = \"Viúvo\";\n" + "Se (nEstCiv = 5)\n" + "aEstCiv = \"Comcubinato\";\n" + "Se (nEstCiv = 6)\n" + "aEstCiv = \"Separado\";\n" + "Se (nEstCiv = 7)\n" + "aEstCiv = \"União Estável\";\n" + "Se (nEstCiv = 9)\n" + "aEstCiv = \"Outros\";\n" },
        "N° CTPS":               { var: "aNumCtp", init: "@Número da CTPS@\nDefinir numero nNumCtp;\nnNumCtp = R034FUN.NumCtp;\nDefinir alfa aNumCtp;\nNumeroParaAlfa ( nNumCtp, aNumCtp); " },
        "Serie CTPS":            { var: "aNumCtpSerie", init: "@Número da Serie da CTPS@\nDefinir Alfa aNumCtpSerie;\naNumCtpSerie = R034FUN.SerCtp;\n" },
        "Estado CTPS":           { var: "aEstCtp", init: "@Estado da CTPS@\nDefinir Alfa aEstCtp;\naEstCtp = R034FUN.EstCtp ;\n" },
        "CBO":                   { var: "aCBO", init: "@CBO Colaborador@\nDefinir Alfa aCBO;\naCBO = R024CAR.CodCb2 ;\n" },
        "Numero CNH":            { var: "aNumCNH", init: "@Numero R034CPL.CatCnh@\nDefinir Alfa aNumCNH;\naNumCNH = R034CPL.NumCnh ;\n" },
        "Categoria CNH":         { var: "aCatCNH", init: "@Categoria CNH@\nDefinir Alfa aCatCNH;\naCatCNH = R034CPL.CatCnh ;\n" },
        "Numero Titulo Eleitor": { var: "aNumTitEleit", init: "@Numero Titulo Eleitor@\nDefinir Alfa aNumTitEleit;\naNumTitEleit = R034CPL.NumEle ;\n" },
        "Data de Admissão":      { var: "aDatAdm", init: "@Data de Admissão do colaborador@\nDefinir Data dDatAdm;\nDefinir Alfa aDatAdm;\ndDatAdm =  R034FUN.datAdm;\n\"DD/MM/YYYY\");\n" }, 
        "N° PIS":                { var: "aNumPis", init: "@Numero de PIS do colaborador@\nDefinir Data aNumPis;\nConverteMascara (1,R034FUN.NumPis,aNumPis,\"999.9[5].99-9\");aNumPis\n"}, 
        "Salario Admissão":      { var: "aSalEmp + \" (\" + xext1 + xext2 + \" ) \"", init: "@Salário do Empregado admissão@\n" + "Definir alfa aSalEmp;\n" + "Definir alfa xext1;\n" + "Definir alfa xext2;\n" + "Definir Cursor Cur_Hist;\n" + "vTipSal = 0;\n" + "FSalEmp = 0;\n" + "xext1 = \"\";\n" + "xext2 = \"\";\n" + "Cur_Hist.SQL \"SELECT R038HSA.VALSAL, R038HSA.TIPSAL, R038HSA.SEQALT FROM R038HSA WHERE R038HSA.NUMEMP = :vNumEmp AND R038HSA.TIPCOL = :vTipCol AND R038HSA.NumCad = :vNumCad AND R038HSA.DATALT = (SELECT MIN(DATALT) FROM R038HSA WHERE R038HSA.NUMEMP = :vNumEmp AND R038HSA.TIPCOL = :vTipCol AND R038HSA.NumCad = :vNumCad ) ORDER BY R038HSA.SEQALT \";\n" + "Cur_Hist.AbrirCursor();\n" + "Se (Cur_Hist.Achou)\n" + "inicio\n" + "vTipSal = Cur_Hist.TipSal;\n" + "FSalEmp = Cur_Hist.ValSal;\n" + "RetExtValor (FSalEmp, 80, 80, xext1, xext2);\n" + "fim\n" + "Cur_Hist.FecharCursor();\n" },
        "Cargo":                 { var: "aTitRed", init: "@Cargo@\n" + "Definir Alfa cargo;\n" + "cargo = R024CAR.TitRed;\n" + "Definir Alfa aTitRed;\n" + "Definir data nDatAdm;\n" + "nNumEmp = R034FUN.numEmp;\n" + "nTipCol = R034FUN.tipCol;\n" + "nNumCad = R034FUN.numCad;\n" + "nDatAdm = R034FUN.datAdm;\n" + "Cur_R024Car.Sql \"Select R024CAR.titRed from R038HCA, R024CAR where R038HCA.numEmp = :nNumEmp and R038HCA.tipCol = :nTipCol and R038HCA.numCad = :nNumCad and R038HCA.EstCar = R024CAR.EstCar and R038HCA.codCar = R024CAR.codCar and R038HCA.datAlt = :nDatAdm\";\n" + "Cur_R024Car.AbrirCursor();\n" + "Se (Cur_R024Car.Achou)\n" + "Inicio\n" + "aTitRed = Cur_R024Car.titRed;\n" + "Fim;\n" + "Cur_R024Car.FecharCursor();\n" },
        "Identidade":            { var: "aIdentidade", init: "@Numero da Identidade do colabolaborador@\nDefinir Alfa aIdentidade;\naIdentidade = R034CPL.NumCid ;\n" },
        "Orgão Emissor ID":      { var: "aOrgEmi", init: "@Orgão Emissor ID Colaborador@\nDefinir Alfa aOrgEmi;\naOrgEmi = R034CPL.EmiCid ;\n" },
        "Estado ID":             { var: "aEstId", init: "@Estado ID Colaborador@\nDefinir Alfa aEstId;\naEstId = R034CPL.EstCid ;\n" },
        "Duração Contrato":      { var: "aDurCon", init: "@Duração do Contrato@\n" + "Definir Data dDurCon;\n" + "Definir Alfa aDurCon;\n" + "dDurCon = (R034FUN.datAdm + R034CPL.durCon) - 1;\n" + "ConverteMascara (3, dDurCon , aDurCon, \"DD/MM/YYYY\");\n" },    
        "Prorrogação Contrato":  { var: "aProCon", init: "@Prorrogação de Contrato@\n" + "Definir Data dProCon;\n" + "Definir Alfa aProCon;\n" + "dProCon = (R034FUN.datAdm + R034CPL.durCon + R034CPL.proCon) - 1;\n" + "ConverteMascara (3, dProCon , aProCon, \"DD/MM/YYYY\");\n" },
        "Endereço Completo":     { var: "R034CPL.EndRua + \", n° \" + R034CPL.EndNum + \", \" + aNomBai + \", \" + aNomCid + \"-\" + R034CPL.CodEst + \", \" + aCodCep", init: "@Endereço Completo@\n" + "Definir Cursor Cur_R074CID;\n" + "Definir Alfa aNomBai;\n" + "Definir Alfa aNomCid;\n" + "Definir Alfa aCodCep;\n" + "ConverteMascara (1,R030FIL.CodCep,aCodCep,\"99.999-999\");\n" + "nCodCid = R034CPL.CodCid;\n" + "Cur_R074CID.Sql \"Select NomCid from R074CID where codCid = :nCodCid\";\n" + "Cur_R074CID.AbrirCursor();\n" + "Se (Cur_R074CID.Achou)\n" + "aNomCid = Cur_R074CID.NomCid;\n" + "Cur_R074CID.FecharCursor();\n" + "nCodBai = R034CPL.CodBai;\n" + "Cur_R074CID.Sql \"Select NomBai from R074BAI where codCid = :nCodCid and codBai = :nCodBai\";\n" + "Cur_R074CID.AbrirCursor();\n" + "Se (Cur_R074CID.Achou)\n" + "aNomBai = Cur_R074CID.NomBai;\n" + "Cur_R074CID.FecharCursor();\n" },
        "Codigo Centro Custo":   { var: "aCodCcu", init: "@Código do Centro de Custo@\n" + "Definir Alfa aCodCcu;\n" + "aCodCcu = R034FUN.CodCcu;\n" },
        
    },
    sistema: {
        "Data e dia de hoje":    { var: "xDataExtenso", init: "@Data por Extenso@\n" + "Definir Alfa xDataExtenso;\n" + "Definir alfa vDataStr;\n" + "Definir alfa ETipEmi;\n" + "Definir Alfa AuxStr;\n" + "Definir data EDatEmi;\n" + "Definir data vDataAux;\n" + "Se (ETipEmi=\"A\")\n" + "   vDataAux = R034FUN.DatAdm;\n" + "Senao\n" + "Inicio\n" + "   Se (EDatEmi=0)\n" + "      vDataAux = DatHoj;\n" + "   Senao\n" + "      vDataAux = EDatEmi;\n" + "Fim;\n" + "cTpData = 3;\n" + "DataExtenso(vDataAux,vDataStr);\n" + "AuxStr = R074CID.NomCid;\n" + "CopiarAlfa(AuxStr, 0, 25);\n" + "xDataExtenso = AuxStr + \" - \" + R074CID.EstCid + \", \" + vDataStr + \".\";\n" },
    }
};

let selectedWordElements = []; // Agora armazena um array de palavras selecionadas
let elementCounter = 0;

// Elementos da UI
const docColumn = document.getElementById('doc-column');
const repColumn = document.getElementById('report-column');

// Sincronizar Scroll entre as colunas
docColumn.addEventListener('scroll', () => {
    repColumn.scrollTop = docColumn.scrollTop;
});
repColumn.addEventListener('scroll', () => {
    docColumn.scrollTop = repColumn.scrollTop;
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    const menu = document.getElementById('context-menu');
    if (!menu.contains(e.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});

// Listener para capturar a seleção de várias palavras arrastando o mouse
docColumn.addEventListener('mouseup', (e) => {
    // Ignorar se clicou no menu
    if (e.target.closest('#context-menu')) return;

    setTimeout(() => {
        const selection = window.getSelection();
        if (!selection.isCollapsed) { // Se o usuário selecionou texto
            selectedWordElements = [];
            const allSpans = docColumn.querySelectorAll('.word');
            
            // Verifica quais palavras (spans) estão dentro da seleção
            allSpans.forEach(span => {
                if (selection.containsNode(span, true)) {
                    selectedWordElements.push(span);
                }
            });

            if (selectedWordElements.length > 0) {
                openMenu(e);
            }
        }
    }, 10);
});

// Carregamento do Arquivo
document.getElementById('file-upload').addEventListener('change', function(e) {
    if(this.files.length === 0) return;
    
    document.getElementById('file-name').textContent = this.files[0].name;
    const reader = new FileReader();
    
    reader.onload = async function(e) {
        const arrayBuffer = e.target.result;
        try {
            const result = await mammoth.convertToHtml({arrayBuffer: arrayBuffer});
            renderSyncedLayout(result.value);
        } catch (error) {
            alert("Erro ao ler o arquivo Word. Certifique-se de que é um .docx válido.");
            console.error(error);
        }
    };
    reader.readAsArrayBuffer(this.files[0]);
});

let memoCounter = 1;

async function renderSyncedLayout(html) {
    const docCont = document.getElementById('doc-pages-container');
    const repCont = document.getElementById('report-pages-container');
    docCont.innerHTML = '';
    repCont.innerHTML = '';

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const elements = Array.from(tempDiv.children);

    let pageNum = 1;
    let current = createPagePair(pageNum, docCont, repCont);

    for (let el of elements) {
        if (el.textContent.trim() === "") continue;

        const uniqueId = `para_${Date.now()}_${elementCounter++}`;
        el.setAttribute('data-id', uniqueId);
        processWords(el);
        current.docArea.appendChild(el);
        
        setTimeout(() => {
            const memo = document.createElement('div');
            memo.className = 'memo-box';
            memo.setAttribute('data-text', el.innerText);

            memo.innerHTML = `<span class="memo-label">Memorando ${memoCounter}</span>`;
            memoCounter++;
            
            const style = window.getComputedStyle(el);
            const margin = parseFloat(style.marginBottom);
            memo.style.height = `${el.offsetHeight}px`;
            memo.style.marginBottom = `${margin}px`;
            
            memo.onclick = () => generateFinalScript(uniqueId);
            current.repArea.appendChild(memo);
        }, 50);
    }
}

function processWords(el) {
    const children = Array.from(el.childNodes);
    
    children.forEach(node => {
        if (node.nodeType === 3) {
            const words = node.nodeValue.split(/(\s+)/);
            const frag = document.createDocumentFragment();
            words.forEach(w => {
                if (w.trim()) {
                    const span = document.createElement('span');
                    span.className = 'word';
                    span.textContent = w;
                    
                    // Lidar com clique em palavra única ou grupo já mapeado
                    span.onclick = (e) => {
                        if (!window.getSelection().isCollapsed) return; // Ignora se estiver selecionando texto
                        
                        const groupId = span.getAttribute('data-group');
                        if (groupId) {
                            // Se faz parte de um grupo, seleciona todo o grupo
                            selectedWordElements = Array.from(document.querySelectorAll(`[data-group="${groupId}"]`));
                        } else {
                            // Seleciona só essa palavra
                            selectedWordElements = [span];
                        }
                        openMenu(e);
                    };
                    frag.appendChild(span);
                } else {
                    frag.appendChild(document.createTextNode(w));
                }
            });
            node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1) {
            processWords(node);
        }
    });
}

function openMenu(e) {
    e.stopPropagation();
    const menu = document.getElementById('context-menu');
    menu.classList.remove('hidden');
    menu.style.top = `${e.pageY + 5}px`;
    menu.style.left = `${e.pageX + 5}px`;
    showMainMenu();
}

// Função auxiliar para limpar mapeamento de um elemento
function clearMapping(el) {
    el.removeAttribute('data-var');
    el.removeAttribute('data-init');
    el.removeAttribute('data-ignore');
    el.removeAttribute('data-group');
    el.classList.remove('mapped', 'mapped-empresa', 'mapped-colaborador');
}

function showSubOptions(cat) {
    const list = document.getElementById('items-list');
    list.innerHTML = ''; 
    document.getElementById('main-options').classList.add('hidden');
    document.getElementById('sub-options').classList.remove('hidden');

    // Botão para remover mapeamento existente
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "🗑️ Remover Mapeamento";
    removeBtn.className = 'menu-btn';
    removeBtn.style.color = "#d93025";
    removeBtn.onclick = (e) => {
        e.stopPropagation();
        selectedWordElements.forEach(el => clearMapping(el));
        document.getElementById('context-menu').classList.add('hidden');
        window.getSelection().removeAllRanges(); // Limpa a seleção azul da tela
    };
    list.appendChild(removeBtn);

    // Lista de variáveis
    Object.keys(variableDefinitions[cat]).forEach(itemName => {
        const btn = document.createElement('button');
        btn.textContent = itemName;
        btn.className = 'menu-btn';
        btn.onclick = (e) => {
            e.stopPropagation();
            const data = variableDefinitions[cat][itemName];
            const groupId = 'grupo_' + Date.now(); // Cria um ID único para esse mapeamento

            selectedWordElements.forEach((el, index) => {
                clearMapping(el); // Limpa resíduos antes de aplicar

                el.classList.add('mapped', `mapped-${cat}`);
                el.setAttribute('data-group', groupId);

                if (index === 0) {
                    // A primeira palavra do grupo recebe a variável
                    el.setAttribute('data-var', data.var);
                    el.setAttribute('data-init', data.init);
                } else {
                    // As palavras seguintes são sinalizadas para serem ignoradas no script
                    el.setAttribute('data-ignore', 'true');
                }
            });
            
            document.getElementById('context-menu').classList.add('hidden');
            window.getSelection().removeAllRanges(); // Limpa a seleção azul da tela
        };
        list.appendChild(btn);
    });
}

function showMainMenu() {
    document.getElementById('main-options').classList.remove('hidden');
    document.getElementById('sub-options').classList.add('hidden');
}

function createPagePair(num, dC, rC) {
    const dP = document.createElement('div'); dP.className = 'paper';
    dP.innerHTML = `<div class="page-tag">PÁGINA ${num}</div><div class="content-area"></div>`;
    dC.appendChild(dP);
    const rP = document.createElement('div'); rP.className = 'report-paper';
    rP.innerHTML = `<div class="page-tag">PÁGINA ${num}</div><div class="content-area"></div>`;
    rC.appendChild(rP);
    return { docArea: dP.querySelector('.content-area'), repArea: rP.querySelector('.content-area') };
}

function generateFinalScript(id) {
    const paragrafo = document.querySelector(`[data-id="${id}"]`);
    const nodes = paragrafo.querySelectorAll('.word');

    let iniMemoSet = new Set();
    let lines = [];
    let currentLine = "aVarAux = ";
    let currentStr = "";
    const MAX_LEN = 100;

    // 1. Coleta os tokens (palavras comuns e variáveis mapeadas)
    let tokens = [];
    nodes.forEach(node => {
        if (node.getAttribute('data-ignore') === 'true') return;

        const varAttr = node.getAttribute('data-var');
        if (varAttr) {
            tokens.push({ type: 'var', value: varAttr });
            iniMemoSet.add(node.getAttribute('data-init'));
        } else {
            // Salva a palavra adicionando o espaço natural à frente
            tokens.push({ type: 'word', value: node.textContent + " " });
        }
    });

    // 2. Processa os tokens quebrando as linhas no limite de 100 caracteres
    tokens.forEach((token) => {
        if (token.type === 'word') {
            let prefixLen = 0;
            if (currentLine !== "" && currentLine !== "aVarAux = " && currentStr === "") {
                prefixLen = 3; // Refere-se ao espaço, mais e espaço (" + ") que será adicionado
            }

            // Simula o tamanho da linha caso a palavra fosse adicionada agora
            let projectedLen = currentLine.length + prefixLen + currentStr.length + token.value.length + 2; // +2 pelas aspas ("")
            
            if (projectedLen > MAX_LEN) {
                if (currentStr !== "") {
                    // Limite atingido: fecha a string, adiciona o +, quebra a linha
                    let escaped = currentStr.replace(/"/g, '\\"');
                    let prefix = (currentLine === "aVarAux = " || currentLine === "") ? "" : " + ";
                    currentLine += prefix + `"${escaped}" +`;
                    lines.push(currentLine);
                    
                    // Inicia nova linha e nova string com a palavra atual
                    currentLine = "";
                    currentStr = token.value; 
                } else {
                    // Caso a própria palavra pura estoure o limite (muito raro), apenas a adiciona
                    currentStr = token.value;
                }
            } else {
                currentStr += token.value;
            }
            
        } else if (token.type === 'var') {
            // Antes de adicionar a variável, descarrega qualquer texto acumulado
            if (currentStr !== "") {
                let escaped = currentStr.replace(/"/g, '\\"');
                let prefix = (currentLine === "aVarAux = " || currentLine === "") ? "" : " + ";
                let part = `"${escaped}"`;
                
                if (currentLine.length + prefix.length + part.length > MAX_LEN && currentLine.trim() !== "aVarAux =" && currentLine !== "") {
                    lines.push(currentLine + " +");
                    currentLine = part;
                } else {
                    currentLine += prefix + part;
                }
                currentStr = "";
            }

            // Insere a variável de forma atômica (sem correr risco de parti-la)
            let prefix = (currentLine === "aVarAux = " || currentLine === "") ? "" : " + ";
            let part = token.value;

            if (currentLine.length + prefix.length + part.length > MAX_LEN && currentLine.trim() !== "aVarAux =" && currentLine !== "") {
                lines.push(currentLine + " +");
                currentLine = part;
            } else {
                currentLine += prefix + part;
            }
        }
    });

    // 3. Descarrega qualquer resíduo final de texto
    if (currentStr !== "") {
        let escaped = currentStr.replace(/"/g, '\\"');
        let prefix = (currentLine === "aVarAux = " || currentLine === "") ? "" : " + ";
        let part = `"${escaped}"`;
        
        if (currentLine.length + prefix.length + part.length > MAX_LEN && currentLine.trim() !== "aVarAux =" && currentLine !== "") {
            lines.push(currentLine + " +");
            currentLine = part;
        } else {
            currentLine += prefix + part;
        }
    }

    // Finaliza a declaração com ponto e vírgula
    currentLine += ";";
    if (currentLine.trim() !== ";") {
        lines.push(currentLine);
    }

    // 4. Monta a saída final do Script
    const iniMemoContent = Array.from(iniMemoSet).join("\n");
    const scriptFinal = `@ Variaveis @\nDefinir Alfa aVarAux;\n${iniMemoContent}\n\n@ Mensagem @\n${lines.join("\n")}\nValStr = aVarAux;\ncancel(2);`;

    document.getElementById('script-output').value = scriptFinal;
    document.getElementById('script-modal').classList.remove('hidden');
}

// Funções do Modal
function closeModal() {
    document.getElementById('script-modal').classList.add('hidden');
}

function copyScript() {
    const textData = document.getElementById('script-output');
    textData.select();
    document.execCommand('copy');
    
    const btn = document.querySelector('.btn-copy');
    const originalText = btn.textContent;
    btn.textContent = "✅ Copiado!";
    btn.style.background = "#0f9d58";
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "#1a73e8";
    }, 2000);
}