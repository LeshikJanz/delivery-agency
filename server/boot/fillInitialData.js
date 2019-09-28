const dbSourceName = 'db';

module.exports = function(app) {
  const ds = app.dataSources[dbSourceName];
  createInitialTrips();
  function createInitialTrips(cb) {
    ds.automigrate('trip', function(err) {
      if (err) return cb(err);
      const Trip = app.models.trip;
      Trip.create(
        [
          {
            fromName: 'Berlin, Germany',
            toName: 'Kyiv, Ukraine',
            departAt: '2019-05-29T00:00:00.000Z',
            vehicle: 'plane',
          },
          {
            fromName: 'Berlin, Germany',
            toName: 'Dnipro, Ukraine',
            departAt: '2019-06-02T00:00:00.000Z',
            vehicle: 'car',
          },
          {
            fromName: 'London, UK',
            toName: 'Kyiv, Ukraine',
            departAt: '2019-06-07T00:00:00.000Z',
            vehicle: 'plane',
          },
          {
            fromName: 'Lyon, France',
            toName: 'Kyiv, Ukraine',
            departAt: '2019-06-07T00:00:00.000Z',
            vehicle: 'plane',
          },
          {
            fromName: 'Moscow, Russia',
            toName: 'Kyiv, Ukraine',
            departAt: '2019-06-08T00:00:00.000Z',
            vehicle: 'car',
          },
          {
            fromName: 'Kyiv, Ukraine',
            toName: 'Berlin, Germany',
            departAt: '2019-05-30T00:00:00.000Z',
            vehicle: 'train',
          },
        ],
        cb
      );
    });
  }
};
