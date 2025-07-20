# Data Directory Structure

This directory contains all the assets, documents, and data files used in the portfolio website.

## Directory Structure

\`\`\`
data/
├── images/
│   ├── profile.jpg                 # Main profile photo
│   ├── logo.png                   # Personal/brand logo
│   ├── companies/                 # Company logos
│   │   ├── icon-plus.png
│   │   ├── pln.png
│   │   ├── indismart.png
│   │   └── optimasi.png
│   ├── universities/              # Educational institution logos
│   │   └── uin-malang.png
│   ├── certifications/            # Certification provider logos
│   │   └── ruangguru.png
│   └── projects/                  # Project screenshots and images
│       ├── chatbot-demo.jpg
│       ├── sentiment-analysis.jpg
│       ├── ocr-container.jpg
│       ├── house-classification.jpg
│       └── multi-agent-rag.jpg
├── videos/                        # Project demo videos
│   ├── chatbot-demo.mp4
│   └── ocr-demo.mp4
├── documents/                     # PDF documents and files
│   ├── resume.pdf                 # Latest CV/Resume
│   ├── chatbot-documentation.pdf
│   └── multi-agent-framework.pdf
├── csv/                          # Data files for projects
│   ├── chatbot-performance.csv
│   ├── sentiment-results.csv
│   └── ocr-accuracy.csv
├── projects.json                 # Project data configuration
└── README.md                     # This file
\`\`\`

## File Guidelines

### Images
- **Format**: JPG, PNG, WebP
- **Profile Photo**: 500x500px minimum, square aspect ratio
- **Company Logos**: PNG with transparent background, 100x100px maximum
- **Project Images**: 800x600px recommended, 16:9 or 4:3 aspect ratio

### Videos
- **Format**: MP4, WebM
- **Resolution**: 1080p maximum for web optimization
- **Duration**: 30 seconds to 2 minutes for project demos
- **Size**: Under 50MB per video

### Documents
- **Format**: PDF preferred
- **Resume**: Keep updated with latest information
- **Documentation**: Include project details, technical specifications

### CSV Files
- **Format**: Standard CSV with headers
- **Size**: Limit to essential data for web display
- **Content**: Project metrics, performance data, analysis results

## Usage Instructions

### Adding New Projects
1. Add project images to `images/projects/`
2. Add demo videos to `videos/` (optional)
3. Update `projects.json` with new project data
4. Include any supporting documents in `documents/`

### Updating Profile Information
1. Replace `images/profile.jpg` with new photo
2. Update `documents/resume.pdf` with latest CV
3. Add new company/university logos as needed

### Data Visualization
- CSV files are automatically loaded and displayed in project modals
- Keep CSV files small (< 1MB) for optimal loading
- Include meaningful headers and clean data

## File Naming Conventions

- Use lowercase letters and hyphens for file names
- Be descriptive: `chatbot-demo.jpg` not `img1.jpg`
- Include version numbers if needed: `resume-v2.pdf`
- Use consistent naming across related files

## Optimization Tips

### Images
- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for logos)
- Consider WebP for better compression

### Videos
- Compress videos for web delivery
- Use H.264 codec for maximum compatibility
- Include poster images for video elements

### Documents
- Optimize PDF file sizes
- Ensure documents are accessible and readable
- Include bookmarks for longer documents

## Security Considerations

- Don't include sensitive personal information
- Remove metadata from images and documents
- Use generic file names for public repositories
- Consider using placeholder data for demos

## Backup and Version Control

- Keep backups of original high-resolution files
- Use version control for important documents
- Document changes in project history
- Maintain organized file structure

## Browser Compatibility

All file formats chosen are compatible with modern browsers:
- Images: JPG, PNG, WebP support
- Videos: MP4 with H.264 codec
- Documents: PDF with standard viewers

## Performance Considerations

- Optimize file sizes for web delivery
- Use lazy loading for images
- Compress videos appropriately
- Consider CDN for large files

## Accessibility

- Include alt text for all images
- Provide transcripts for videos when possible
- Ensure documents are screen-reader friendly
- Use descriptive file names

---

**Note**: This directory structure is designed to be flexible and scalable. Add or modify folders as needed for your specific requirements.
