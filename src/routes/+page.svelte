<script>
  import Image from '$lib/Image.svelte';
  // when we import static assets like images, Vite provides us with a hashed
  // URL that can be cached forever so uses only have to download it once
  import carinaNircam from '$lib/main_image_star-forming_region_carina_nircam_final-5mb.jpg';
  import test from '$lib/images/Extendable Card Component/Final card component - dark.png';


  const carinaNircamAlt =
    'an undulating, translucent star-forming region in the Carina Nebula is shown in this Webb image, hued in ambers and blues; foreground stars with diffraction spikes can be seen, as can a speckling of background points of light through the cloudy nebula';
  const title = 'SvelteKit Imagetools example';
  const description =
    'A basic configuration for SvelteKit with Imagetools set up for image processing with sharp';
</script>

{console.log(test)}`

<h1>{title}</h1>

<figure>
  <Image src={carinaNircam} alt={carinaNircamAlt} />
  <figcaption>
    Image: <a
    href="https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-reveals-cosmic-cliffs-glittering-landscape-of-star-birth"
  >NASA</a
  >
  </figcaption>
</figure>

