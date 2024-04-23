Inoltre nella prima commit deve essere presente un file readme.md dove spiegate a parole, in italiano, come pensate di svolgere l'esercizio per passaggi.
Riguardo queste novità saremo ovviamente tolleranti nei primi giorni, non abbiate paura di sbagliare: non succede nulla.
:roccia: 
MILESTONE 1
Per prima cosa, creiamo il markup statico come visto in mattinata. Costruiamo il container e inseriamo le immagini.
Solo una sarà visibile grazie a una sua classe, avremo così la struttura base. Condite con un pò di CSS per dare stile (senza esagerare).
Vi consiglio di rispolvere object-fit :occhiolino:
:roccia: 
MILESTONE 2
Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.
:roccia: 
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.
:roccia: 
MILESTONE 4
Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente :occhiolino:
:regalo: BONUS 1
Gestiamo il ciclo infinito del carosello. Dall'ultima immagine andare avanti ci porta alla prima e viceversa.
:regalo: BONUS 2
Aggiungere delle piccole miniature (thumbnails) sulla destra, come nel secondo screenshot. Tutte le miniature saranno leggermente più scure, tranne quella che corrisponde all'immagine attiva in carosello. Questa avrà anche un bordo colorato.
Non impazzite sullo scurire le thumbnail, potete usare: un div nero con opacity sopra le immagini, immagini che hanno un'opacity bassa, i filter o tanto altro.
La cosa importante è che quando clicco sulle frecce per cambiare slide, venga cambiata anche la miniatura attiva.
:libri: PRIMA DI SCRIVERE CODICE
Non andate in crash: prima prendetevi qualche minuto per ragionare sul da farsi. Già mentalmente usate il divide et impera per portare a casa un pezzo alla volta. Scrivere il readme vi obbliga a tradurre pensieri in parole e quindi capire se quell'idea aveva senso solo nella vostra testa :occhiolino: