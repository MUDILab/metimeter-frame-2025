# Metimeter: UX redesign 2025

La nuova versione del frame di Metimeter utilizza il framework `Tailwind CSS` per una responsiveness moderna e miglior flessibilità nello sviluppo. È necessario installare in locale `Node.js` per poter lavorare al progetto.

## 🚨 Requisiti

- Editor consigliato: Visual Studio Code
- [Node.js](https://nodejs.org/) >= 22.15 

## 🛠️ Installazione locale

1. **Clonare il repository in locale**
2. **Da terminale, nella cartella della repository, eseguire**

```bash
npm install
npm run build 
```
Questi comandi creano la cartella `node_modules`, necessaria solo in locale.
Non deve essere inclusa nel repository Git: è già esclusa tramite `.gitignore`.

In `package.json` è presente uno script automatico che ad ogni salvataggio dei file esegue un comando per ricompilare il CSS. I pezzi di CSS personalizzati non presenti in HTML o scritti con Tailwind vanno inseriti in `src/input.css`.
Qualora per qualche ragione lo script non partisse in automatico, il comando da eseguire una volta apportate modifiche CSS è 
```bash
npx tailwindcss -i ./src/input.css -o ./css/style.css --watch
```
## 🌐 Preview locale
Compilati i file CSS è sufficiente aprire il progetto in qualsiasi browser o ambiente di sviluppo web.

## 🧯 Risoluzione problemi comuni

- **CSS non viene aggiornato**:
  Verificare che il comando `npm run build` sia attivo in terminale oppure rilanciarlo manualmente con `npx tailwindcss ...`.

- **Il browser non mostra le modifiche**:
  Svuotare la cache o ricaricare con Ctrl+Shift+R (refresh)

## 📄 Documentazione di Tailwind
https://tailwindcss.com/docs



