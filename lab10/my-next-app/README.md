# my-next-app — Next.js CRUD App

Kompletna aplikacja full-stack zbudowana zgodnie z instrukcją ćwiczenia Next.js.

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz http://localhost:3000 w przeglądarce.

## Uwaga: obrazek owocu

W pliku `app/layout.tsx` używany jest obrazek `/public/fruit.jpg`.  
Umieść własny plik `fruit.jpg` (min. 500×500 px) w katalogu `public/` przed uruchomieniem aplikacji.

## Struktura projektu

```
my-next-app/
├── app/
│   ├── api/customers/
│   │   ├── route.ts              # GET /api/customers, POST /api/customers
│   │   └── [id]/route.ts         # GET/PUT/DELETE /api/customers/:id
│   ├── customers/
│   │   ├── _components/
│   │   │   ├── new-customer-form.tsx
│   │   │   └── customers-table.tsx
│   │   ├── [id]/edit/page.tsx    # Strona edycji klienta
│   │   ├── actions.ts            # Server Actions (create/update/delete)
│   │   └── page.tsx              # Strona listy klientów
│   ├── globals.css
│   ├── layout.tsx                # Globalny layout z nagłówkiem i stopką
│   └── page.tsx                  # Strona startowa
├── components/
│   └── submit-button.tsx         # Współdzielony komponent przycisku
├── lib/
│   ├── models/customer.ts        # Interfejsy Customer, CustomerInput
│   └── services/customer-service.ts
└── public/
    └── fruit.jpg                 # ← dodaj własny obrazek!
```
