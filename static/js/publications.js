const pubs = [
    {
      thumb: '../images/admjrm.png',
      title: 'Adaptive Diffusion Models for Motion-corrected Cone-beam Head CT',
      authors: ['Antoine De Paepe', 'Alexandre Bousse', 'Clémentine Phung-Ngoc', 'Youness Mellak', 'Dimitris Visvikis'],
      venue: '--, 2025',
      year: 2025,
      links: {
        PAGE: 'https://antoinedepaepe.github.io/jrm-adm-io',
        ARXIV: 'https://arxiv.org/pdf/2504.14033',
        CODE: 'https://github.com/antoinedepaepe/jrm-adm'
      }
    },
    {
      thumb: '../images/admjrm-4dct.png',
      title: 'Solving Blind Inverse Problems: Adaptive Diffusion Models for Motion-corrected Sparse-view 4DCT',
      authors: ['Antoine De Paepe', 'Alexandre Bousse', 'Clémentine Phung-Ngoc', 'Dimitris Visvikis'],
      venue: 'Oral presentation Fully3D 2025',
      year: 2025,
      links: {
        ARXIV: 'https://arxiv.org/pdf/2501.12249'
      }
    },
    {
      thumb: '../images/pet-blind-dps.png',
      title: 'Joint Reconstruction of the Activity and the Attenuation in PET by Diffusion Posterior Sampling: a Feasibility Study',
      authors: ['Clémentine Phung-Ngoc', 'Alexandre Bousse', 'Antoine De Paepe', 'Hong-Phuong Dang', 'Olivier Saut', 'Dimitris Visvikis'],
      venue: 'Oral presentation Fully3D 2025',
      year: 2025,
      links: {
        ARXIV: 'https://arxiv.org/pdf/2412.11776'
      }
    }
  ];
  
  const listEl = document.getElementById('pub-list');
  pubs.forEach(pub => {
    const authorsHTML = pub.authors
      .map(name =>
        name.trim() === 'Antoine De Paepe'
          ? '<strong><u>Antoine De Paepe</u></strong>'
          : name.trim()
      )
      .join(', ');
  
    const linksHTML = Object.entries(pub.links)
      .map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`)
      .join('');
  
    const pubHTML = `
      <div class="pub">
        <img class="thumb" src="${pub.thumb}" alt="thumbnail">
        <div class="details">
          <h2>${pub.title}</h2>
          <div class="authors">${authorsHTML}</div>
          <div class="venue">${pub.venue}</div>
          <div class="buttons">${linksHTML}</div>
        </div>
        <div class="year">${pub.year}</div>
      </div>`;
  
    listEl.insertAdjacentHTML('beforeend', pubHTML);
  });
  
