# Context for AI Coding Assistants

## What I'm Building
A mobile-first web app that shows where traditional sports betting odds diverge from prediction market probabilities. This helps identify market inefficiencies.

## My Skill Level
- Comfortable with JavaScript/React basics
- New to Next.js (but understand React)
- Weak on UI/UX design
- Strong product thinking

## What I Need Help With
- Next.js-specific patterns (App Router, API routes)
- Tailwind CSS styling (mobile-first, responsive)
- API integration best practices
- Error handling and edge cases
- PWA configuration

## What I Can Handle
- Understanding the business logic
- Making product decisions
- Testing and validation
- Deployment

## Code Style Preferences
- TypeScript for type safety
- Functional React components (no classes)
- Clear variable names over terse code
- Comments explaining "why" not "what"
- Keep components small and focused

## Testing Approach
- Manual testing during development
- Use mock data to avoid hitting API rate limits
- Test on real iPhone before considering done

## Important Constraints
- Must work well on mobile (primary use case)
- Must be fast (sports betting is time-sensitive)
- Must handle missing data gracefully (not all games on Polymarket)
- Must respect API rate limits (only 500 Odds API calls/month on free tier)

## Decision Framework
When faced with tradeoffs:
1. **Mobile experience > Desktop experience**
2. **Speed > Features**
3. **Working > Perfect**
4. **Simple > Clever**

## Common Questions

**"Should I add feature X?"**
- Is it in the MVP scope in CLAUDE.md? If no, punt to V2.

**"How should I style this component?"**
- Use v0.dev to generate initial design, then iterate

**"This API call is failing..."**
- Check rate limits first
- Verify API key is set in .env.local
- Check if data structure matches expectations

**"Should I use this library?"**
- Is it already in package.json? Use it.
- Is it lightweight and well-maintained? Probably yes.
- Does it add significant bundle size? Probably no.

## File Organization Principles
- Components should be self-contained
- Utilities should be pure functions
- API routes should handle their own caching
- Types should be centralized in lib/types.ts

## When Stuck
1. Check CLAUDE.md for architectural guidance
2. Check PLAN.md for what step you're on
3. Look at Next.js docs for framework-specific questions
4. Ask: "Am I overcomplicating this?"