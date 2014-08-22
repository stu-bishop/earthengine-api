// Plot a histogram of elevation in Colorado.

var elevation = ee.Image('srtm90_v4');
var colorado = ee.Geometry.Rectangle(-109.05, 41, -102.05, 37);

// Generate the histogram data.  Use minBucketWidth for nice sized buckets.
var coloradoElevationHistogram =
    Chart.image.histogram(elevation, colorado, 200, null, 300);
Chart.print(coloradoElevationHistogram, 'ColumnChart', {
  title: 'Histogram of Elevation in Colorado (meters)'
});

Map.addLayer(elevation.clip(colorado));
Map.setCenter(-107, 39, 6);
