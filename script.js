(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "hfov": 165,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayMovements": [
  {
   "duration": 1600,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3200,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8ED34AFC_A973_99CA_41CF_403D5E077E52",
 "initialPosition": {
  "yaw": -129.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "27",
 "id": "panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4",
 "adjacentPanoramas": [
  {
   "backwardYaw": -118.93,
   "yaw": 63.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0"
  },
  {
   "backwardYaw": -175.31,
   "yaw": -53.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BBB94B1A_A8CC_984E_41C2_91E76FAF086A",
  "this.overlay_BB512F7E_A8CF_98C6_419C_F2EE0DC07F78"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80B73588_A973_A84A_41A0_8FEE66D0F557",
 "initialPosition": {
  "yaw": 4.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "43",
 "id": "panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489",
 "adjacentPanoramas": [
  {
   "backwardYaw": -31.46,
   "yaw": 50.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BF790F3A_A8FD_F84E_41CE_0587FEE208C5"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80AD7513_A973_A85E_41E2_25470A343D19",
 "initialPosition": {
  "yaw": 95.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "media": "this.panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80F5E676_A973_A8C6_41E3_FA127308069B",
 "initialPosition": {
  "yaw": -178.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "39",
 "id": "panorama_A3E113B2_A8DD_685E_41D3_778935D5088B",
 "adjacentPanoramas": [
  {
   "backwardYaw": 41.36,
   "yaw": 113.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9"
  },
  {
   "backwardYaw": -28.71,
   "yaw": -117.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7"
  },
  {
   "backwardYaw": 50.3,
   "yaw": -31.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BDE3D097_A8F7_A846_41C8_9C911F3C4AD4",
  "this.overlay_BDCE18B9_A8F5_F84A_41E3_90B303495C88",
  "this.overlay_BD8EFAA1_A8F3_987A_41DF_1926F6FF53A1"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8094C5FE_A973_ABC6_41E0_09B9D240F514",
 "initialPosition": {
  "yaw": 101.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_88ACF812_A9CD_985E_41E2_02E1EA57F530.ogg",
  "mp3Url": "media/audio_88ACF812_A9CD_985E_41E2_02E1EA57F530.mp3"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_88ACF812_A9CD_985E_41E2_02E1EA57F530",
 "data": {
  "label": "79689-616756-616756-phury-tenderly-master-84-bpm-030122-ext-2444_B5g30SqB"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EDE4AD8_A973_99CA_41E3_EA212E8BDADC",
 "initialPosition": {
  "yaw": 151.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80265713_A973_A85E_41DE_D8923302E246",
 "initialPosition": {
  "yaw": -66.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "4",
 "id": "panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8",
 "adjacentPanoramas": [
  {
   "backwardYaw": -49.13,
   "yaw": -16.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084"
  },
  {
   "backwardYaw": 6.25,
   "yaw": 172.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_B8F2CADF_A8DF_99C6_41D4_606009D1AE13",
  "this.overlay_B85A16EE_A8DC_A9C6_41D3_DE61F88F0E69"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "partial": false,
 "label": "32",
 "id": "panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0",
 "adjacentPanoramas": [
  {
   "backwardYaw": 63.71,
   "yaw": -118.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BBCBF4E3_A8CD_69FE_41C8_AC1FD0B13A53"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "29",
 "id": "panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11",
 "adjacentPanoramas": [
  {
   "backwardYaw": -78.43,
   "yaw": -84.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0"
  },
  {
   "backwardYaw": -53.81,
   "yaw": -175.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4"
  },
  {
   "backwardYaw": 5.31,
   "yaw": 95.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BAE41D57_A8D5_98C6_41D8_2BA6097630B6",
  "this.overlay_BA53C314_A8D4_E85A_41DD_AFC12B00D14A",
  "this.overlay_BA62DEED_A8D3_F9CA_417D_FFC02FA6FFD9"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "partial": false,
 "label": "1",
 "id": "panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C",
 "adjacentPanoramas": [
  {
   "backwardYaw": 172.58,
   "yaw": 6.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_A7A4AF91_A8DC_F85A_41D1_99E8CBC902F6"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80DCB6C4_A973_A83A_41DC_DC1369A230B2",
 "initialPosition": {
  "yaw": -125.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E2DFB45_A973_983A_41D4_0DF9F71E0A89",
 "initialPosition": {
  "yaw": 85.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "36",
 "id": "panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D",
 "adjacentPanoramas": [
  {
   "backwardYaw": 36.71,
   "yaw": -0.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BCE78CC0_A8CC_983A_41A7_B5F491884596"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "partial": false,
 "label": "13",
 "id": "panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084",
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.15,
   "yaw": -49.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8"
  },
  {
   "backwardYaw": -94.65,
   "yaw": 54.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_B818164D_A8DD_A8CA_41A0_C8CBA1470DB8",
  "this.overlay_B9D00FD2_A8D3_97DE_41C6_A4DCA4FCE7A8"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E3FBBB2_A973_985E_41DA_FD6F59DDEAF7",
 "initialPosition": {
  "yaw": 179.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80BD7561_A973_A8FA_41DF_4DDBCA862B1B",
 "initialPosition": {
  "yaw": 61.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E388B8C_A973_984A_41DB_2AEBDC0717D3",
 "initialPosition": {
  "yaw": -36.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8034173F_A973_A847_41C0_D5F7B4ED1C53",
 "initialPosition": {
  "yaw": 130.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80A5A53A_A973_A84E_41E2_1CB8F4A61724",
 "initialPosition": {
  "yaw": -58.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E296B20_A973_987A_41E3_D3E57353CF1B",
 "initialPosition": {
  "yaw": 163.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "14",
 "id": "panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F",
 "adjacentPanoramas": [
  {
   "backwardYaw": 54.52,
   "yaw": -94.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084"
  },
  {
   "backwardYaw": 41.02,
   "yaw": 121.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_B94952F9_A8D4_E9CA_41D2_0F3BE2BE1933",
  "this.overlay_B94C249B_A8D5_E84F_41E0_2A5856D3B25F"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 0)",
   "media": "this.panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "partial": false,
 "label": "33",
 "id": "panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E",
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.92,
   "yaw": 143.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7"
  },
  {
   "backwardYaw": 95.04,
   "yaw": 5.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BB65F6D4_A8CC_E9DA_41E4_D27B9063791A",
  "this.overlay_BB26B4F9_A8CD_E9CA_41D8_B2DCB58E8DEA"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E357BDA_A973_9FCE_41DE_50C3F2EA6906",
 "initialPosition": {
  "yaw": -143.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_809A05D6_A973_ABC6_41DB_1AED0FE32271",
 "initialPosition": {
  "yaw": -116.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8028A6EC_A973_A9CA_41CE_E9078C047F35",
 "initialPosition": {
  "yaw": -138.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "buttonCardboardView": [
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EDB8AB3_A973_985E_41BC_35045DA65724",
 "initialPosition": {
  "yaw": -138.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E23EB69_A973_98CA_41E5_2E0A8FB9C853",
 "initialPosition": {
  "yaw": 62.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EC7BA8D_A973_984A_41A7_89D8DAC82E36",
 "initialPosition": {
  "yaw": -7.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8003B767_A973_A8C6_41CC_F2961C7ACFC0",
 "initialPosition": {
  "yaw": -173.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80C2369D_A973_A84A_41E4_DBB50A0F55CC",
 "initialPosition": {
  "yaw": -84.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_808FB5B0_A973_A85A_41E3_1194ED8D275B",
 "initialPosition": {
  "yaw": 148.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "41",
 "id": "panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9",
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.21,
   "yaw": 41.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BD4BBC43_A8F3_783E_41D1_B07228243731"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "partial": false,
 "label": "20",
 "id": "panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0",
 "adjacentPanoramas": [
  {
   "backwardYaw": -84.1,
   "yaw": -78.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11"
  },
  {
   "backwardYaw": 121.69,
   "yaw": 41.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_B9026224_A8D4_A879_41C9_0A3F10D0FCF3",
  "this.overlay_BAF4A676_A8D7_E8C6_41E2_5794720BB917"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80FB464E_A973_A8C6_41D4_2DC732044A22",
 "initialPosition": {
  "yaw": -174.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "37",
 "id": "panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7",
 "adjacentPanoramas": [
  {
   "backwardYaw": -117.09,
   "yaw": -28.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B"
  },
  {
   "backwardYaw": 143.83,
   "yaw": 1.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E"
  },
  {
   "backwardYaw": -0.3,
   "yaw": 36.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_BC89D914_A8F4_985A_41E4_60BDD193ACC2",
  "this.overlay_BC4B79C8_A8F4_9BC9_41CA_45A8B3F20500",
  "this.overlay_BDE89DCA_A8F4_9BCE_41A9_E359DA0FD8E5"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_80EF5627_A973_A846_41C1_65929B23D4E1",
 "initialPosition": {
  "yaw": 126.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "progressBottom": 55,
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 6,
 "propagateClick": true,
 "toolTipFontFamily": "Arial",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarOpacity": 1,
 "toolTipTextShadowHorizontalLength": 0,
 "minHeight": 50,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "width": "100%",
 "toolTipFontStyle": "normal",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "minWidth": 100,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowVerticalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBackgroundColor": "#660000",
 "height": "100%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "shadow": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "paddingBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "playbackBarRight": 0,
 "paddingRight": 0,
 "transitionDuration": 500,
 "toolTipBorderRadius": 3,
 "toolTipBorderColor": "#767676",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "top": 0,
 "toolTipOpacity": 1,
 "borderSize": 0,
 "toolTipFontSize": "12px",
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBorderColor": "#000000",
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontWeight": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowColor": "#0000CC",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowOpacity": 1
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 86.06,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "3.08%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "Container",
 "layout": "absolute",
 "overflow": "scroll",
 "verticalAlign": "top",
 "top": "5.22%",
 "borderSize": 0,
 "height": 84.95,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "layout": "absolute",
 "overflow": "visible",
 "verticalAlign": "top",
 "bottom": 0,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": 59,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--MENU"
 },
 "backgroundOpacity": 0.64,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "layout": "absolute",
 "overflow": "scroll",
 "verticalAlign": "top",
 "top": "0%",
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 10,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "class": "Container"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Button_B2DF2E3E_A8CC_9846_41C2_2C6AEB044738",
  "this.Button_B119BC25_A8CC_B87A_41DD_C087CCD7C828",
  "this.Button_B2D0E8C5_A8CC_F83A_41E1_591AADE9C111",
  "this.Button_BF2BA7D8_A8F4_F7CA_41D1_45956A50EE9A",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_B2512499_A933_684A_41CD_B38E522A4445",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "right": "0.72%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "13.315%",
 "layout": "vertical",
 "top": "19%",
 "overflow": "scroll",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 3,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "60.168%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "maxHeight": 225,
 "id": "Image_8DBADBE2_A9F7_BFFE_41B8_47908F22AF38",
 "left": "3.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "url": "skin/Image_8DBADBE2_A9F7_BFFE_41B8_47908F22AF38.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "9.601%",
 "top": "3.53%",
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.openLink('https://www.instagram.com/carpevin.winebar/', '_blank')",
 "height": "18.992%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image65533"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 225,
 "class": "Image"
},
{
 "cursor": "hand",
 "maxHeight": 1095,
 "id": "Image_81B0167B_A973_A8CD_41D0_0A01E84D1059",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "right": "3.53%",
 "url": "skin/Image_81B0167B_A973_A8CD_41D0_0A01E84D1059.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "15.308%",
 "bottom": "5.38%",
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.openLink('https://beacons.ai/nextour360', '_blank')",
 "height": "25.042%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image71336"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 1095,
 "class": "Image"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "width": 58,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxWidth": 58,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "width": 58,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxWidth": 58,
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0, this.camera_80BD7561_A973_A8FA_41DF_4DDBCA862B1B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_B26BE89F_A933_9846_41DB_3C1B1E09A91C",
   "pitch": -2.79,
   "yaw": 63.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BBB94B1A_A8CC_984E_41C2_91E76FAF086A",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 63.71,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.79
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11, this.camera_80B73588_A973_A84A_41A0_8FEE66D0F557); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B26BB89F_A933_9846_41E5_004310DB49C6",
   "pitch": 0.33,
   "yaw": -53.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BB512F7E_A8CF_98C6_419C_F2EE0DC07F78",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -53.81,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.33
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B, this.camera_808FB5B0_A973_A85A_41E3_1194ED8D275B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.1,
   "image": "this.AnimatedImageResource_B26F78A6_A933_9846_41E1_C0025B1699C2",
   "pitch": -23.37,
   "yaw": 50.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BF790F3A_A8FD_F84E_41CE_0587FEE208C5",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 50.3,
   "hfov": 9.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.37
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7, this.camera_8EDE4AD8_A973_99CA_41E3_EA212E8BDADC); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_B26D98A3_A933_987E_41B8_FD286D0B911E",
   "pitch": -2.83,
   "yaw": -117.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BDE3D097_A8F7_A846_41C8_9C911F3C4AD4",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -117.09,
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.83
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489, this.camera_8ED34AFC_A973_99CA_41CF_403D5E077E52); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.38,
   "image": "this.AnimatedImageResource_B26E78A4_A933_987A_41D3_1A62A37B7329",
   "pitch": -7.01,
   "yaw": -31.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BDCE18B9_A8F5_F84A_41E3_90B303495C88",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.46,
   "hfov": 10.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.01
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9, this.camera_8EDB8AB3_A973_985E_41BC_35045DA65724); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.46,
   "image": "this.AnimatedImageResource_B26E28A5_A933_987A_41DA_0D6184B93C74",
   "pitch": -4.35,
   "yaw": 113.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BD8EFAA1_A8F3_987A_41DF_1926F6FF53A1",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 113.21,
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.35
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084, this.camera_8034173F_A973_A847_41C0_D5F7B4ED1C53); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.43,
   "image": "this.AnimatedImageResource_B269289C_A933_984A_41D4_52E682F4A486",
   "pitch": -5.91,
   "yaw": -16.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8F2CADF_A8DF_99C6_41D4_606009D1AE13",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -16.15,
   "hfov": 12.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.91
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C, this.camera_8003B767_A973_A8C6_41CC_F2961C7ACFC0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.45,
   "image": "this.AnimatedImageResource_8E202F76_A95C_98C6_41E3_C54BE8D910E9",
   "pitch": -2.14,
   "yaw": 172.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B85A16EE_A8DC_A9C6_41D3_DE61F88F0E69",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.58,
   "hfov": 9.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.14
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4, this.camera_809A05D6_A973_ABC6_41DB_1AED0FE32271); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B26D68A1_A933_987A_4187_5F81C699EBA1",
   "pitch": -1.34,
   "yaw": -118.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BBCBF4E3_A8CD_69FE_41C8_AC1FD0B13A53",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -118.93,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.34
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0, this.camera_8094C5FE_A973_ABC6_41E0_09B9D240F514); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_B26C68A0_A933_987A_41DC_A51DA14D53E3",
   "pitch": -2.47,
   "yaw": -84.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BAE41D57_A8D5_98C6_41D8_2BA6097630B6",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.1,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.47
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E, this.camera_80FB464E_A973_A8C6_41D4_2DC732044A22); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_B26CC8A0_A933_987A_41AC_B0094F931B81",
   "pitch": -1.75,
   "yaw": 95.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BA53C314_A8D4_E85A_41DD_AFC12B00D14A",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.04,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.75
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4, this.camera_80EF5627_A973_A846_41C1_65929B23D4E1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_B26CB8A0_A933_987A_41C0_01DD1581553A",
   "pitch": -2.1,
   "yaw": -175.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BA62DEED_A8D3_F9CA_417D_FFC02FA6FFD9",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.31,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.1
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8, this.camera_8EC7BA8D_A973_984A_41A7_89D8DAC82E36); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.36,
   "image": "this.AnimatedImageResource_B269589A_A933_984E_41D6_85ACB63C8BFC",
   "pitch": 8.48,
   "yaw": 6.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A7A4AF91_A8DC_F85A_41D1_99E8CBC902F6",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.25,
   "hfov": 12.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7, this.camera_8E357BDA_A973_9FCE_41DE_50C3F2EA6906); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.47,
   "image": "this.AnimatedImageResource_B26CD8A2_A933_987E_41B7_46911F6D0122",
   "pitch": -3.8,
   "yaw": -0.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BCE78CC0_A8CC_983A_41A7_B5F491884596",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.3,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.8
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8, this.camera_8E296B20_A973_987A_41E3_D3E57353CF1B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B269A89D_A933_984A_41DE_B993D60E6CE8",
   "pitch": -1.58,
   "yaw": -49.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B818164D_A8DD_A8CA_41A0_C8CBA1470DB8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -49.13,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.58
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F, this.camera_8E2DFB45_A973_983A_41D4_0DF9F71E0A89); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_B26A189D_A933_984A_41D9_242D48249BC7",
   "pitch": -3.39,
   "yaw": 54.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B9D00FD2_A8D3_97DE_41C6_A4DCA4FCE7A8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 54.52,
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.39
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084, this.camera_80DCB6C4_A973_A83A_41DC_DC1369A230B2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_B26AC89D_A933_984A_41B7_D426E4A8277A",
   "pitch": -2.96,
   "yaw": -94.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B94952F9_A8D4_E9CA_41D2_0F3BE2BE1933",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -94.65,
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.96
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0, this.camera_8028A6EC_A973_A9CA_41CE_E9078C047F35); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B26A989E_A933_9846_41DF_1692EAABCC73",
   "pitch": -0.02,
   "yaw": 121.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B94C249B_A8D5_E84F_41E0_2A5856D3B25F",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 121.69,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.02
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11, this.camera_80C2369D_A973_A84A_41E4_DBB50A0F55CC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.46,
   "image": "this.AnimatedImageResource_B26BA8A1_A933_987A_41E2_95D5DEAB91BC",
   "pitch": -4.4,
   "yaw": 5.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BB65F6D4_A8CC_E9DA_41E4_D27B9063791A",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.31,
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.4
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7, this.camera_80F5E676_A973_A8C6_41E3_FA127308069B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B26C68A2_A933_987E_41B7_39569B0435D3",
   "pitch": -0.41,
   "yaw": 143.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BB26B4F9_A8CD_E9CA_41D8_B2DCB58E8DEA",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 143.83,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.41
  }
 ],
 "rollOverDisplay": false
},
{
 "cursor": "hand",
 "maxHeight": 37,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "right": 30,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "bottom": 8,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "maxWidth": 49,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "width": 58,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "visible": false,
 "maxWidth": 58,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "width": 58,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "visible": false,
 "maxWidth": 58,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "width": 58,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "visible": false,
 "maxWidth": 58,
 "class": "IconButton"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B, this.camera_80265713_A973_A85E_41DE_D8923302E246); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.47,
   "image": "this.AnimatedImageResource_B26E88A5_A933_987A_41C9_70FD8E0A7FF8",
   "pitch": -4.01,
   "yaw": 41.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BD4BBC43_A8F3_783E_41D1_B07228243731",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 41.36,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.01
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11, this.camera_80AD7513_A973_A85E_41E2_25470A343D19); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B26B489E_A933_9846_41DA_E86A44EA2006",
   "pitch": -0.93,
   "yaw": -78.43,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B9026224_A8D4_A879_41C9_0A3F10D0FCF3",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.43,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.93
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F, this.camera_80A5A53A_A973_A84E_41E2_1CB8F4A61724); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_B26B389E_A933_9846_41D6_1343C0D9B5C1",
   "pitch": -2.57,
   "yaw": 41.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BAF4A676_A8D7_E8C6_41E2_5794720BB917",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 41.02,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.57
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3E113B2_A8DD_685E_41D3_778935D5088B, this.camera_8E23EB69_A973_98CA_41E5_2E0A8FB9C853); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_B26CA8A2_A933_987E_41D1_E7943D5075D1",
   "pitch": -1.23,
   "yaw": -28.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BC89D914_A8F4_985A_41E4_60BDD193ACC2",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -28.71,
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.23
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D, this.camera_8E3FBBB2_A973_985E_41DA_FD6F59DDEAF7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.47,
   "image": "this.AnimatedImageResource_B26D68A3_A933_987E_41E1_C572BFE2DBAA",
   "pitch": -4.17,
   "yaw": 36.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BC4B79C8_A8F4_9BC9_41CA_45A8B3F20500",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 36.71,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.17
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E, this.camera_8E388B8C_A973_984A_41DB_2AEBDC0717D3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_B26DD8A3_A933_987E_41D1_88543A6DD8C5",
   "pitch": -1.75,
   "yaw": 1.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BDE89DCA_A8F4_9BCE_41A9_E359DA0FD8E5",
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.92,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.75
  }
 ],
 "rollOverDisplay": false
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "left": "9.56%",
 "width": 60,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "13.42%",
 "borderSize": 0,
 "height": 60,
 "mode": "toggle",
 "transparencyActive": true,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxWidth": 60,
 "class": "IconButton"
},
{
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": 53,
 "borderSize": 0,
 "minWidth": 1,
 "height": 2,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 3000,
 "class": "Image"
},
{
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 30,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "class": "Container",
 "layout": "horizontal",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "bottom": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 3,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": 51,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "15%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "top": "7%",
 "overflow": "visible",
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "shadowBlurRadius": 25,
 "horizontalAlign": "center",
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container"
},
{
 "textDecoration": "none",
 "id": "Button_B2DF2E3E_A8CC_9846_41C2_2C6AEB044738",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "shadowColor": "#000000",
 "borderRadius": 5,
 "cursor": "hand",
 "propagateClick": true,
 "iconWidth": 2,
 "width": 130,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  0.56,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 1,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#333333",
  "#CC0000",
  "#333333"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "gap": 5,
 "fontSize": "12.033600000000002px",
 "data": {
  "name": "Button house info"
 },
 "borderColor": "#990000",
 "iconHeight": 2,
 "minWidth": 1,
 "shadowVerticalLength": -1,
 "fontWeight": "normal",
 "label": "IMAGEM A\u00c9REA ",
 "shadowBlurRadius": 21,
 "horizontalAlign": "center",
 "height": 40,
 "shadow": true,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 1,
 "rollOverShadow": false,
 "shadowOpacity": 0.09,
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button"
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "id": "Button_B119BC25_A8CC_B87A_41DD_C087CCD7C828",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "paddingRight": 0,
 "borderRadius": 5,
 "propagateClick": true,
 "iconWidth": 2,
 "width": 130,
 "backgroundColorRatios": [
  0,
  0.56,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "borderColor": "#990000",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 1,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#333333",
  "#CC0000",
  "#333333"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "13px",
 "data": {
  "name": "Button house info"
 },
 "label": "FACHADA",
 "iconHeight": 2,
 "minWidth": 1,
 "fontWeight": "normal",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadowBlurRadius": 21,
 "horizontalAlign": "center",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0,
 "paddingTop": 0,
 "rollOverShadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "shadowColor": "#000000"
},
{
 "textDecoration": "none",
 "id": "Button_B2D0E8C5_A8CC_F83A_41E1_591AADE9C111",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "shadowColor": "#000000",
 "borderRadius": 5,
 "cursor": "hand",
 "propagateClick": true,
 "iconWidth": 2,
 "width": 130,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  0.56,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 1,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#333333",
  "#CC0000",
  "#333333"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "13.0272px",
 "data": {
  "name": "Button house info"
 },
 "borderColor": "#990000",
 "iconHeight": 2,
 "minWidth": 1,
 "shadowVerticalLength": -1,
 "fontWeight": "normal",
 "gap": 5,
 "label": "AMBIENTE ",
 "shadowBlurRadius": 21,
 "horizontalAlign": "center",
 "height": 40,
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "shadow": true,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 1,
 "rollOverShadow": false,
 "shadowOpacity": 0.09,
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button"
},
{
 "textDecoration": "none",
 "id": "Button_BF2BA7D8_A8F4_F7CA_41D1_45956A50EE9A",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "rollOverFontColor": "#DB9B4D",
 "shadowColor": "#000000",
 "borderRadius": 5,
 "cursor": "hand",
 "propagateClick": true,
 "iconWidth": 2,
 "width": 130,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  0.56,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "pressedFontColor": "#000000",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 1,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#333333",
  "#CC0000",
  "#333333"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "13.0272px",
 "data": {
  "name": "Button house info"
 },
 "borderColor": "#990000",
 "iconHeight": 2,
 "minWidth": 1,
 "shadowVerticalLength": -1,
 "fontWeight": "normal",
 "gap": 5,
 "label": "SAL\u00c3O FUNDO",
 "shadowBlurRadius": 21,
 "horizontalAlign": "center",
 "height": 40,
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "shadow": true,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0,
 "paddingTop": 0,
 "shadowHorizontalLength": 1,
 "rollOverShadow": false,
 "shadowOpacity": 0.09,
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button"
},
{
 "cursor": "hand",
 "maxHeight": 96,
 "id": "IconButton_B2512499_A933_684A_41CD_B38E522A4445",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "width": 53,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/carpevin.winebar/', '_blank')",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton47795"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_B2512499_A933_684A_41CD_B38E522A4445.png",
 "maxWidth": 96,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "width": 58,
 "minHeight": 1,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "visible": false,
 "maxWidth": 58,
 "class": "IconButton"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26BE89F_A933_9846_41DB_3C1B1E09A91C",
 "levels": [
  {
   "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26BB89F_A933_9846_41E5_004310DB49C6",
 "levels": [
  {
   "url": "media/panorama_A3F8AC32_A8DC_F85E_41D2_A0B5CB80F3B4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26F78A6_A933_9846_41E1_C0025B1699C2",
 "levels": [
  {
   "url": "media/panorama_A3E49693_A8DD_685E_41C6_38FD0AF1F489_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26D98A3_A933_987E_41B8_FD286D0B911E",
 "levels": [
  {
   "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26E78A4_A933_987A_41D3_1A62A37B7329",
 "levels": [
  {
   "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26E28A5_A933_987A_41DA_0D6184B93C74",
 "levels": [
  {
   "url": "media/panorama_A3E113B2_A8DD_685E_41D3_778935D5088B_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B269289C_A933_984A_41D4_52E682F4A486",
 "levels": [
  {
   "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_8E202F76_A95C_98C6_41E3_C54BE8D910E9",
 "levels": [
  {
   "url": "media/panorama_A3CFC89B_A8DC_B84E_41D3_C1F04B9E63E8_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26D68A1_A933_987A_4187_5F81C699EBA1",
 "levels": [
  {
   "url": "media/panorama_A3EEBF2D_A8DC_984A_41BB_BCE523FE44F0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26C68A0_A933_987A_41DC_A51DA14D53E3",
 "levels": [
  {
   "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26CC8A0_A933_987A_41AC_B0094F931B81",
 "levels": [
  {
   "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26CB8A0_A933_987A_41C0_01DD1581553A",
 "levels": [
  {
   "url": "media/panorama_A3CCE523_A8DC_E87E_41E0_B8B9853F3F11_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B269589A_A933_984E_41D6_85ACB63C8BFC",
 "levels": [
  {
   "url": "media/panorama_A47E8A2C_A8D5_F84A_41BA_9CF5B9A03B3C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26CD8A2_A933_987E_41B7_46911F6D0122",
 "levels": [
  {
   "url": "media/panorama_A3EC315B_A8DC_A8CE_41BF_33302A07844D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B269A89D_A933_984A_41DE_B993D60E6CE8",
 "levels": [
  {
   "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26A189D_A933_984A_41D9_242D48249BC7",
 "levels": [
  {
   "url": "media/panorama_A3CC9132_A8DC_A85E_41E4_8E5D99561084_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26AC89D_A933_984A_41B7_D426E4A8277A",
 "levels": [
  {
   "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26A989E_A933_9846_41DF_1692EAABCC73",
 "levels": [
  {
   "url": "media/panorama_A3E69A05_A8DC_983A_41E1_E2F661439E8F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26BA8A1_A933_987A_41E2_95D5DEAB91BC",
 "levels": [
  {
   "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26C68A2_A933_987E_41B7_39569B0435D3",
 "levels": [
  {
   "url": "media/panorama_A3CCD832_A8DC_B859_41DE_0F0C26DEBE1E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26E88A5_A933_987A_41C9_70FD8E0A7FF8",
 "levels": [
  {
   "url": "media/panorama_A3CD5D85_A8DD_783A_41E3_57C7DA9CCAB9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26B489E_A933_9846_41DA_E86A44EA2006",
 "levels": [
  {
   "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26B389E_A933_9846_41D6_1343C0D9B5C1",
 "levels": [
  {
   "url": "media/panorama_A3CCE241_A8DC_E83A_41B8_D52D767E6AF0_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26CA8A2_A933_987E_41D1_E7943D5075D1",
 "levels": [
  {
   "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26D68A3_A933_987E_41E1_C572BFE2DBAA",
 "levels": [
  {
   "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_B26DD8A3_A933_987E_41D1_88543A6DD8C5",
 "levels": [
  {
   "url": "media/panorama_A3CCCB18_A8DC_984A_419B_351EBFD6F0C7_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 5,
 "propagateClick": true,
 "iconWidth": 0,
 "width": 120,
 "backgroundColorRatios": [
  0.62,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "borderColor": "#FF0000",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "borderSize": 2,
 "backgroundColor": [
  "#00020E",
  "#330000"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "14px",
 "data": {
  "name": "Button house info"
 },
 "label": "RESERVAS",
 "iconHeight": 0,
 "minWidth": 1,
 "click": "this.openLink('https://www.carpevin.com.br/', '_blank')",
 "gap": 5,
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverShadow": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "shadowColor": "#000000"
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 5,
 "propagateClick": true,
 "iconWidth": 32,
 "width": 162,
 "backgroundColorRatios": [
  0.65,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "borderColor": "#FF0000",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 2,
 "backgroundColor": [
  "#00020E",
  "#330000"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "14px",
 "label": "ALB\u00daM FOTOS 360\u00ba",
 "iconHeight": 32,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "gap": 5,
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "data": {
  "name": "Button panorama list"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "shadowColor": "#000000"
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 5,
 "propagateClick": true,
 "iconWidth": 32,
 "width": 125,
 "backgroundColorRatios": [
  0.6,
  1
 ],
 "fontFamily": "Montserrat",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "borderColor": "#FF0000",
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 2,
 "backgroundColor": [
  "#00020E",
  "#330000"
 ],
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": "14px",
 "label": "LOCALIZA\u00c7\u00c3O",
 "iconHeight": 32,
 "minWidth": 1,
 "click": "this.openLink('https://www.google.com/maps/place/CarpeVin+WineBar/@-27.1111726,-52.6156315,15z/data=!4m5!3m4!1s0x0:0xe47d0aee9d5c0331!8m2!3d-27.1111726!4d-52.6156315', '_blank')",
 "gap": 5,
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "data": {
  "name": "Button location"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "shadowColor": "#000000"
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "shadowSpread": 1,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "borderRadius": 4,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 20,
 "minHeight": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "shadowHorizontalLength": 3,
 "overflow": "scroll",
 "borderSize": 0,
 "height": 96,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.66,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadowBlurRadius": 6,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#CC0000",
  "#000000"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowOpacity": 0.09,
 "scrollBarMargin": 0,
 "class": "Container"
},
{
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "paddingLeft": 70,
 "propagateClick": false,
 "itemLabelTextDecoration": "none",
 "scrollBarWidth": 10,
 "itemLabelFontWeight": "normal",
 "itemThumbnailBorderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 156,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "gap": 26,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "scrollBarColor": "#04A3E1",
 "itemLabelGap": 7,
 "height": "100%",
 "itemBackgroundOpacity": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "rollOverItemLabelFontColor": "#04A3E1",
 "shadow": false,
 "itemHorizontalAlign": "center",
 "horizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMode": "normal",
 "class": "ThumbnailGrid",
 "itemLabelHorizontalAlign": "center",
 "itemWidth": 220,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderRadius": 5,
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat",
 "itemLabelFontStyle": "normal",
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "itemMinHeight": 50,
 "borderSize": 0,
 "itemOpacity": 1,
 "itemPaddingTop": 3,
 "itemThumbnailShadow": false,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelPosition": "bottom",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadow": true,
 "itemMinWidth": 50,
 "data": {
  "name": "ThumbnailList"
 },
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "scrollBarMargin": 2
},
{
 "class": "HTMLText",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 100,
 "width": "77.122%",
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "80%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:4.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:5.55vh;font-family:'Bebas Neue Bold';\"><B>\u00c1BUM DE FOTOS 360\u00ba</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "right": 20,
 "minHeight": 50,
 "verticalAlign": "top",
 "width": "100%",
 "top": 20,
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "maxWidth": 60,
 "class": "IconButton"
}],
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
  "this.Image_8DBADBE2_A9F7_BFFE_41B8_47908F22AF38",
  "this.Image_81B0167B_A973_A8CD_41D0_0A01E84D1059"
 ],
 "desktopMipmappingEnabled": false,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "start": "this.playAudioList([this.audio_88ACF812_A9CD_985E_41E2_02E1EA57F530]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "vrPolyfillScale": 0.5,
 "defaultVRPointer": "laser",
 "layout": "absolute",
 "overflow": "visible",
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "width": "100%",
 "paddingTop": 0,
 "scripts": {
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); }
 },
 "contentOpaque": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarMargin": 2,
 "class": "Player"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
