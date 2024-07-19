import html2canvas from 'html2canvas';

export async function downloadBanner(bannerRef, columns, resolution) {
  // Save original CSS properties
  const originalGridTemplateColumns = bannerRef.current.style.gridTemplateColumns;
  const originalGap = bannerRef.current.style.gap;

  // Update CSS to make images larger
  bannerRef.current.style.gridTemplateColumns = `repeat(${columns}, ${resolution}px)`;
  bannerRef.current.style.gap = '0px';

  // Wait a short period to ensure the styles are applied
  await new Promise(resolve => setTimeout(resolve, 100));

  // Capture the canvas
  const canvas = await html2canvas(bannerRef.current, {
    useCORS: true,
    width: resolution * columns,
  });

  // Revert CSS changes
  bannerRef.current.style.gridTemplateColumns = originalGridTemplateColumns;
  bannerRef.current.style.gap = originalGap;

  // Convert canvas to image and trigger download
  const dataURL = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'banner.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
