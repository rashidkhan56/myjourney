# Static Projects Guide

This guide explains how to use and customize your static projects.

## Overview

Your portfolio now has **static projects** that use the same styling as your dynamic Prismic projects, but with hardcoded content. This is perfect for showcasing projects without needing to manage them in Prismic CMS.

## File Structure

```
clancymendonca/
├── src/
│   ├── app/
│   │   └── static-projects/
│   │       ├── page.tsx              # Projects listing page
│   │       └── [id]/
│   │           └── page.tsx          # Individual project detail page
│   ├── components/
│   │   ├── StaticProjectsList.tsx    # Projects list component (same styling as ContentList)
│   │   └── StaticProjectBody.tsx     # Project detail component (same styling as ContentBody)
│   └── data/
│       └── staticProjects.ts         # Your project data
└── public/
    └── images/
        └── projects/                 # Place your project images here
```

## How to Add/Edit Projects

### 1. Edit Project Data

Open `src/data/staticProjects.ts` and modify the `staticProjects` array:

```typescript
{
  id: "project-1",                    // Unique identifier (used in URL)
  title: "E-Commerce Platform",       // Project title
  date: "2024-10-15",                 // Project date (YYYY-MM-DD)
  tags: ["React", "Next.js"],         // Technology tags
  description: "Project description", // Short description
  image: "/images/projects/ecommerce.jpg",           // Main image
  hoverImage: "/images/projects/ecommerce-hover.jpg", // Hover image
  content: [                          // Project content blocks
    {
      type: 'text',
      content: 'Your text content here...'
    },
    {
      type: 'image',
      content: '/images/projects/ecommerce-detail-1.jpg'
    }
  ]
}
```

### 2. Add Project Images

Place your images in `public/images/projects/`:
- Main image (shown in list)
- Hover image (shown on mouse hover)
- Detail images (shown in project page)

Recommended image sizes:
- Main/Hover images: 800x600px or similar aspect ratio
- Detail images: 1200x675px or larger for high quality

### 3. Access Your Projects

- **Projects List**: Visit `/static-projects`
- **Individual Project**: Visit `/static-projects/project-1` (or whatever your project ID is)

## Features

✅ **Same Styling**: Uses identical styles as your dynamic Prismic projects
✅ **Smooth Animations**: GSAP animations on scroll and hover
✅ **Hover Preview**: Interactive image preview on mouse hover
✅ **Responsive Design**: Works beautifully on mobile and desktop
✅ **SEO Optimized**: Proper metadata for each project
✅ **Static Generation**: Fast load times with Next.js static generation

## Content Types

You can add two types of content blocks:

### Text Block
```typescript
{
  type: 'text',
  content: 'Your paragraph text here...'
}
```

### Image Block
```typescript
{
  type: 'image',
  content: '/images/projects/your-image.jpg'
}
```

## Customization

### Change the Route
If you want to use `/projects` instead of `/static-projects`:
1. Rename `src/app/static-projects/` to `src/app/projects/`
2. Update the link in `StaticProjectsList.tsx` from `/static-projects/` to `/projects/`

### Modify Styling
- **List styling**: Edit `src/components/StaticProjectsList.tsx`
- **Detail page styling**: Edit `src/components/StaticProjectBody.tsx`
- Both components use Tailwind CSS classes

### Add More Content Types
You can extend the content types in `staticProjects.ts`:
```typescript
content: {
  type: 'text' | 'image' | 'code' | 'video'; // Add new types
  content: string;
}[]
```

Then update `StaticProjectBody.tsx` to render the new types.

## Example: Adding a New Project

```typescript
// In src/data/staticProjects.ts, add to the array:
{
  id: "my-awesome-project",
  title: "My Awesome Project",
  date: "2024-11-05",
  tags: ["React", "TypeScript", "Node.js"],
  description: "An amazing project that does cool things",
  image: "/images/projects/awesome.jpg",
  hoverImage: "/images/projects/awesome-hover.jpg",
  content: [
    {
      type: 'text',
      content: 'This project showcases my skills in...'
    },
    {
      type: 'image',
      content: '/images/projects/awesome-screenshot.jpg'
    },
    {
      type: 'text',
      content: 'Key features include...'
    }
  ]
}
```

Then add your images to `public/images/projects/` and visit `/static-projects/my-awesome-project`!

## Tips

1. **Image Optimization**: Use Next.js Image component (already configured) for automatic optimization
2. **Content Length**: Keep description brief for the listing, detailed content goes in the content array
3. **Tags**: Use tags that match your tech stack for consistency
4. **Dates**: Use ISO format (YYYY-MM-DD) for proper date formatting
5. **IDs**: Use URL-friendly IDs (lowercase, hyphens instead of spaces)

## Need Help?

- Check the existing project examples in `staticProjects.ts`
- Compare with the dynamic projects styling in `ContentBody.tsx` and `ContentList.tsx`
- All styling classes use Tailwind CSS - refer to [Tailwind docs](https://tailwindcss.com)

