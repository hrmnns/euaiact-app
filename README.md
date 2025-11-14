# EU AI Act WebApp

Diese WebApp basiert auf dem webapp-core Framework und unterstützt Unternehmen dabei,
ihre Rolle gemäß EU AI Act zu bestimmen und sich schnell über die wichtigsten Quellen und Dokumente zu informieren.

## Zweck der Anwendung

Die Anwendung besteht aus zwei Kernbereichen:

### 1. Rollenklassifikation gemäß EU AI Act
Ein interaktiver, JSON-basierter Fragebogen ermittelt:
- ob das Unternehmen in Bezug auf ein KI-System als Provider, Deployer, Importer, Distributor, Product Manufacturer oder Authorised Representative gilt
- welche Zusatzattribute oder Pflichten daraus entstehen können
- ob ein Einsatzbereich potenziell als Hochrisiko-KI (Annex III) einzustufen sein könnte

Die Klassifikation erfolgt anhand eines dynamischen Entscheidungsbaums, der vollständig durch die FormsEngine gerendert wird.

### 2. Linkliste: Wichtige Quellen zum EU AI Act
Die LinkListEngine stellt eine kuratierte Sammlung relevanter Quellen bereit, darunter:
- Gesetzestexte und Anhänge
- Erläuterungen der EU-Kommission
- Branchenverbände (DSAG, BDEW, Bitkom)
- Fachartikel und Analysen
- Tools wie die AI Act Compliance Map

Alle Links werden dynamisch aus einer JSON-Datei geladen.

## Features

- Dynamische Fragebogen-Engine
- Rollen- und Attributzuordnung basierend auf Antworten
- Endknoten mit Ergebnisanzeige
- PDF-Export der Auswertung
- Dynamische Linkliste mit Kategorien, Suche, Tags und Sortierung
- Responsive Design basierend auf webapp-core v2
- Trennung von Inhalt (JSON) und Logik (JS)

## Struktur der Anwendung

### Fragebogen
Pfad zur JSON-Datei:
forms/eu_ai_act_roles.json

Einbindung:
<div id="forms-root" data-forms-src="forms/eu_ai_act_roles.json"></div>
<script src="versions/v2/lib/forms.js" defer></script>

### Linkliste
Pfad zur JSON-Datei:
links/links_ai_act.json

Einbindung:
<div id="links-root" data-links-src="links/links_ai_act.json"></div>
<script src="versions/v2/lib/linklist.js" defer></script>

## Einsatzmöglichkeiten

- Compliance-Abteilungen
- IT- und KI-Verantwortliche
- Datenschutzbeauftragte
- Projektteams mit KI-Bezug
- Beratungen im Bereich Regulierung

Die Anwendung dient der strukturierten Voranalyse und ersetzt keine Rechtsberatung.

## Anforderungen

- Moderner Browser
- webapp-core v2
- Keine zusätzlichen Build- oder Framework-Abhängigkeiten
- Hosting über GitHub Pages oder beliebige Webserver möglich

## Hinweis

Diese Anwendung bietet keine rechtliche Beratung.
Die Bewertung dient ausschließlich der Orientierung für Unternehmen mit KI-Bezug.
