# OPERON CRM ONE-SITE UNIFICATION REBUILD - TODO

## PHASE 1: Navigation Updates
- [x] Rename "Industries" to "Solutions" in GlobalHeader.tsx
- [x] Add Gun FFL CRM to Solutions dropdown
- [x] Update mobile menu to show "Solutions" instead of "Industries"

## PHASE 2: New Gun FFL CRM Page
- [x] Create GunFFLPage.tsx with GlobalHeader/Footer
- [x] Match homepage styling exactly
- [x] Add appropriate pricing (Small Business with beta discounts on Growth/Pro)
- [x] Include FFL-specific features and content

## PHASE 3: Pricing Page Updates
- [x] Add Sports tab to pricing categories
- [x] Add Gun FFL CRM tab to pricing categories
- [x] Ensure all beta discounts are correctly applied

## PHASE 4: Router Updates
- [x] Add Gun FFL CRM route to App.tsx
- [x] Import GunFFLPage component

## PHASE 5: Build & Deploy
- [x] Run npm run build to verify no errors
- [ ] Push to GitHub
- [ ] Verify deployment

## BETA DISCOUNT RULES (Reference)
- Small Business (includes Sports, Gun FFL): Growth $49→$24.50, Pro $79→$39.50
- Medical/Legal: Growth $99→$49.50, Business $149→$74.50
- Social Media: Growth ONLY $99→$49.50
- Restaurant/Retail: NO discount