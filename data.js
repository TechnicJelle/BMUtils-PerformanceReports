window.BENCHMARK_DATA = {
  "lastUpdate": 1711240787558,
  "repoUrl": "https://github.com/TechnicJelle/BMUtils",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "22576047+TechnicJelle@users.noreply.github.com",
            "name": "TechnicJelle",
            "username": "TechnicJelle"
          },
          "committer": {
            "email": "22576047+TechnicJelle@users.noreply.github.com",
            "name": "TechnicJelle",
            "username": "TechnicJelle"
          },
          "distinct": true,
          "id": "f5ed778f43e02a8bb8dc0a1a3dda015fc9ec869d",
          "message": "Fully enable the performance reports! (2)",
          "timestamp": "2024-03-23T04:42:12+01:00",
          "tree_id": "84fcefb25574d2915f1285b3586ad0fe1ae7759c",
          "url": "https://github.com/TechnicJelle/BMUtils/commit/f5ed778f43e02a8bb8dc0a1a3dda015fc9ec869d"
        },
        "date": 1711179040702,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.technicjelle.CheeseBench.measureCheese10",
            "value": 84.10094685952636,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese11",
            "value": 370.0557349756614,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese12",
            "value": 1690.1330815333336,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese13",
            "value": 7959.814793579999,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese14",
            "value": 37486.22861523998,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese15",
            "value": 160452.84572627998,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "22576047+TechnicJelle@users.noreply.github.com",
            "name": "TechnicJelle",
            "username": "TechnicJelle"
          },
          "committer": {
            "email": "22576047+TechnicJelle@users.noreply.github.com",
            "name": "TechnicJelle",
            "username": "TechnicJelle"
          },
          "distinct": true,
          "id": "92ae55867054a1181bfe5c91b626114e9bed1caa",
          "message": "Last commit caused the overlaps to not be detected\n\nWhich is something I actually didn't want anyway, so this is a good improvement.\nI'll count this as a bugfix, so it's not a major API change.",
          "timestamp": "2024-03-23T17:23:27+01:00",
          "tree_id": "33f0e482face2cbeec1e69c388f922537f15cb2e",
          "url": "https://github.com/TechnicJelle/BMUtils/commit/92ae55867054a1181bfe5c91b626114e9bed1caa"
        },
        "date": 1711217572562,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.technicjelle.CheeseBench.measureCheese10",
            "value": 14.177082566258255,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese11",
            "value": 55.201298164145044,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese12",
            "value": 216.88385704407045,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese13",
            "value": 2170.684161512,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese14",
            "value": 8774.1300047,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese15",
            "value": 40996.24612411999,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "22576047+TechnicJelle@users.noreply.github.com",
            "name": "TechnicJelle",
            "username": "TechnicJelle"
          },
          "committer": {
            "email": "22576047+TechnicJelle@users.noreply.github.com",
            "name": "TechnicJelle",
            "username": "TechnicJelle"
          },
          "distinct": true,
          "id": "e49c8bd59da4af8645c4044902038248068a8880",
          "message": "Added unsafe methods\n\nBut do not use them in the benchmarks yet, so we get a baseline first.",
          "timestamp": "2024-03-23T22:03:55+01:00",
          "tree_id": "0d6e4cf6c2433e1b5505c2ed23ce5847bbeeca6a",
          "url": "https://github.com/TechnicJelle/BMUtils/commit/e49c8bd59da4af8645c4044902038248068a8880"
        },
        "date": 1711240787292,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.technicjelle.CheeseBench.measureCheese10",
            "value": 13.947665273018144,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese11",
            "value": 54.512265384166106,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese12",
            "value": 210.88971972633652,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese13",
            "value": 2131.654840784,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese14",
            "value": 8802.969641820002,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureCheese15",
            "value": 40938.70219476,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureUnsafeCheese10",
            "value": 13.792201959117707,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureUnsafeCheese11",
            "value": 54.43759267350251,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureUnsafeCheese12",
            "value": 216.26207468522978,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureUnsafeCheese13",
            "value": 2145.4641388879995,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureUnsafeCheese14",
            "value": 8759.491609199998,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          },
          {
            "name": "com.technicjelle.CheeseBench.measureUnsafeCheese15",
            "value": 40931.81270628,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 5\nthreads: 1"
          }
        ]
      }
    ]
  }
}