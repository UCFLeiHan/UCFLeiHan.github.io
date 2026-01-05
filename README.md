# Lei Han - Academic Homepage

Personal academic website of **Lei Han**, PhD candidate in Civil Engineering at the University of Central Florida.

🌐 **Live Site**: [https://ucfleihan.github.io](https://ucfleihan.github.io)

## About

I am a PhD candidate in Civil Engineering at the University of Central Florida (UCF), working as a Research Assistant at the Smart & Safe Transportation (SST) Lab under the supervision of [Dr. Mohamed Abdel-Aty](https://scholar.google.com/citations?user=Cp4F4JkAAAAJ&hl=en).

### Research Interests

- **Traffic Safety Modeling** - Developing data-driven models for traffic crash prediction and analysis
- **Traffic Operation Analysis** - Network-level traffic state estimation and prediction
- **Connected Vehicle Data Applications** - Leveraging large-scale CV trajectory data for transportation research
- **Spatiotemporal Deep Learning** - Advanced machine learning methods for Intelligent Transportation Systems

### Education

- **Ph.D. in Civil Engineering** (Expected May 2026), University of Central Florida
- **M.S. in Transportation Engineering** (2023), Tongji University
- **B.S. in Transportation Engineering** (2020), Tongji University

### Research Highlights

- Published **18 SCI papers** in leading transportation journals, including:
  - *Accident Analysis & Prevention*
  - *Analytic Methods in Accident Research*
  - *Transportation Research Part C*
  - *IEEE Transactions on Intelligent Transportation Systems*
- **5 first-author** and **4 corresponding-author** publications
- Serves as reviewer for 10+ transportation journals and major conferences

## Website Structure

This website is built using [Jekyll](https://jekyllrb.com/) and the [Academic Pages](https://academicpages.github.io/) theme. It includes:

- **Home/About** - Personal introduction and research overview
- **News** - Latest updates and achievements
- **Research** - Detailed research projects and methodologies
- **Publications** - Complete list of journal articles, conference papers, and preprints
- **CV** - Academic curriculum vitae
- **Posts** - Blog posts and personal updates

## Local Development

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) (with bundler)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional, recommended)

### Using Docker (Recommended)

The easiest way to run the site locally is using Docker:

```bash
docker compose up
```

The site will be available at `http://localhost:4000`. Changes to Markdown and HTML files will automatically rebuild.

To restart the container:

```bash
docker compose restart
```

### Manual Setup

1. **Install dependencies**:
   ```bash
   bundle install
   npm install
   ```

2. **Run Jekyll server**:
   ```bash
   bundle exec jekyll serve -l -H localhost
   ```

   Or with auto-reload:
   ```bash
   bundle exec jekyll serve -l -H localhost --watch
   ```

3. **Access the site**: Open `http://localhost:4000` in your browser

### Building for Production

```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory.

## Contact

- **Email**: [lei.han@ucf.edu](mailto:lei.han@ucf.edu)
- **Google Scholar**: [Lei Han](https://scholar.google.com/citations?user=Gm1QlW0AAAAJ)
- **ORCID**: [0000-0002-2976-0762](https://orcid.org/0000-0002-2976-0762)
- **LinkedIn**: [Lei Han](https://www.linkedin.com/in/lei-han-5b273b2a0)
- **GitHub**: [@UCFLeiHan](https://github.com/UCFLeiHan)

## License

This website is built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template, which is based on the [Minimal Mistakes Jekyll theme](https://mmistakes.github.io/minimal-mistakes/).

The content of this website (text, images, publications) is © Lei Han. All rights reserved.

---

**Last Updated**: 2025
