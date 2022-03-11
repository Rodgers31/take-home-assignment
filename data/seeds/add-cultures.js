// const cultureData = require('../seedData/foam-seed');

// cultureData.forEach((product) => {
// let cultures = product.url;
// let dates = product.lastModified;
// });

exports.seed = async function (knex) {
  // Deletes ALL existing entries, truncate resets all primary keys
  await knex('culture').truncate();

  await knex('culture').insert([
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.24.38-9zijoye9dteugy6agooo506u3c6wrin920a99mavvv4z9mahkt7qbu6thl2l3v39.png',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.25.42-0fw8tob3vhrhl8u0f3mu2g37bwnojkpwiaku4rfi3xk868y7dygr2hbge1oenzmc.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.26.45-gufo8yohnsyuh4ys4zav04g9xes9bjum0tm7674n1zml5xoffbf49jtg66iom9et.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.27.49-bxu773d2wqhgitol14xxxi82dwno2gaieiiauqgwm4m4ra2z7kdf7n5bry1hx5cs.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.28.52-b0l43ldf7drejbvb9zwwdfk6mzrijepfskmd2fe2nnkypep4oykasytfad4jgs65.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.29.56-j2ksuoclj7qv9i3eg6kibqp7tt37ofuz7gttf1bljmfjrr7r8so3cud2wgqjrxi9.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.30.59-lrwqymy7doww346bzw7ie77a2lxl4hypjwm96man4eoh1c31ardyt9sjmuyoy99g.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.32.03-3h1z9avwzxvgxiaalgzo7iy6wo80efxj6wrswuw12pm4pe6vybl0flg2zxmq7dov.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.33.07-9pvwpqitcuymn4i4ygebmviczkmj1tp9rloi31pnxgnfckp92ukk2fdutpj9u8hc.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.34.11-004a0iqm3d7dcbrkwub4znkris7l7vlgpj10jekfie078zepfqmtil8s57ahid41.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.35.14-ff3akuuxvhvnuofit3t8y1cswtc7outym35kj0jkqh9msze353vyowdqc7f09dqs.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.36.18-inmwxz8u7tu2y3n8dlwfokfxvnbimiyar2gkv50wgpzsrl9quwdeyfkpkoeyglgk.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.37.21-qrm4mmx93iqtgpb6b21qdg89rt69eddrka1ldrg1hdwwk9ae9d731jrknlkwte31.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.38.25-g570e0d63r9m38gkhmgodsa9926aomtvf0xjvdejjx6levbnfs82k4x8d01mmyj0.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.39.29-xf8x9rv7jewwpvoiopke85ltyhak25bo94pq9g4sdw0asow7yemvsewkfqz3wrkt.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.40.33-k0nadz0o6qjxdzbvtxhge0h8oas0kjkf8jjmugfr6ae3cv5qh8o9rby94fnbf2or.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.41.36-1vrf12v6g4k7ct7zsxy76z39ioebnri4rnmzzbmbpdypd5er0m4onpt5wojq7mic.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.42.40-8deilf1rhavlm76mph539mk2a6rqiocsugksuqb6nr87eo7kdtlf0q1eekp2orj7.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.43.43-uam7ou0hc3vxd7vwfnmws7njcac0wyelwgalwa80gc30nxr2itepgx3bujq19i30.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.44.47-q0x79bcav1mdivcbgscm7pp99vlkggujz5cki9yrm312418gkqkxtt8xs7y6guz2.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.45.50-8yo2xsil2m699nk3v5v0a1vcbfl2u9lwbpod5pwyq29rlx1e0i0hqanfqzm79w2v.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.46.54-in0feqdedejfjz6ggj34arrzlb3cv02l5m8vorgjov2lt67vuuo8i6j0k5yfu7ow.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.47.58-9ssrnjndxyf1f7in8ve61yqvzrxn5t5rodyzxdibkk1nspj02b20xruq3962hc9y.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.49.01-jzvys1o3u6d1mxxo5tm2tcer5qf756rtv374v6bkufb8wzsug9c3o6ohjqfsc37u.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.50.05-s85f1pl9v9jc9alfkbv709nun5i6np7ivga5jq9loonqqhnvzcn3y9yxjj1uozr8.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.51.08-6ggsk0mrqer1bhg6t7o1o1dzto9feww1kyxk81dpmqqmjue4km0ulp11ydwkq5lu.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.52.12-h9y3lzbbjvhj06e0ilnrmdqdw0znistas594djxywh24fuuapc286z1na32xqyf7.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.53.16-bb85r5f6zvvxde6j27zshnyfoc51ku7nojsxrb05w4qtn6y2pqgd0bqwxwz2mtqk.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.54.20-g257ruavcrrf8t04hylen58ztcs7ayg1qw0ql26s973zmz1yl0dwf04qkb6278z1.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.55.23-k98a9cdu9lem2o79pgpqpzfcyzz75jv5il1xn3ilf4576jmbcl710z389t89hunv.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.56.27-mmay135yyubplfpdjg8mtculdeo08znj5vf8dywflqz5i36a996kuwb5592u0s13.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.57.30-seivpn9kkw9vvti0lx2hnwv7np9t0xbgpab217doz6buai6ugfqdzbz2i05kpz1a.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.58.34-cso4lkqgo2al73d9ep7yd6ibwrjcdabht3ilolqksju4m4j5u3m3wuqc9f0ccp2l.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.59.38-04sm9fvtsb9ms1sq75t2e8nsa2om22jm111iciwx5az7rs5s8dtw1ahvx0ze57ap.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.00.41-cevokl9p6vf21uzj3eorim29wjortxhso7pb0wdy7lmkr1ings1uja7d90pagnrt.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.01.45-2rlgj9zwkq2vds20p9z1o7z6gm4c04tbh7jjl3sjeudy95p6sr3uqwajhfzs1qpu.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.02.48-mh7ap02h1hul4gv48kh8k7p4mqggf1c7491d8pxix6o3kziumqkrh6k604146t0c.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.03.52-smov18oywnybmmxdbkq61vpp0yutsb58q96n9lb24fhygq0twld2iiqdpswg0l69.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.04.56-5nh44337wsw8pdk69u0aj3g3sz1tlhldavz96qtwofutl667ocz5ri5tvij5nwfz.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.05.59-fgvxlm6jadno1nwvk2huahmv8v8kyyu442meetiovbmfg1t6530oo0imqqkycs5n.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.07.03-0k1ah8vmfgj2ufgxvbkj8tc4d0xgqxjpgmsdy40bniw0705537g9e7sx4p7j7iku.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.08.06-7orv0p6t8141f3jgo477o7wjjiepkldio6ms7kfdv00n52xvau8o0u63uwjpe2zw.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.09.10-31xtgqiifhlfzliob37rkr5nq94i7w930pka3od8z39n8jm626u3aq1649wh86qo.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.10.13-mw0ekz1dkx9b8pza9mfx5ad2bcdbr2oymfdlpy1xkmnsvcyys2h0kcf5729bovw7.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.11.17-d3bo53gflal4gb384llgfv4b971fd9eqpyd6cdmp7jy14a1tp1pqh6ccxun2yh8o.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.12.20-ulu8uf90ad46lsqbs5aq4ahbybx7wfhu6p1mpzheww3hjz0erjszd4bs1n8763v5.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.13.24-bt79mfw5p0zdtualmg75yfqdacyv79ma85peu9ius933huknlrxmhzk1ob4ewv16.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.14.28-9nrrx9knposjzc2qzcdstcu48y7sbplaqiuso9vlp1jn6wy6ovehligj9vbs7gkq.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.15.31-j0wpd9rbaoo49swrpv6ez76u7531gnfzd8kvqxsb2lmseon0qsw3hy70af040eic.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.16.35-agmzz141g02bhgdd6kvdl7o2f4dr1ukjjbb2ywq4jpz3r2q3fu9h0qmw9bklnbks.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.17.38-whaaxxa6ff8ruvwhoo4sxsae1humo213vvtgxb3pae2239w1ocl3bwot0ftx62ew.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.18.42-cvb5ju6l7mrjo3ocsqw0g0glmnsyus6jkn8t0am4rb1gjszkvp5hp92o3ggqbyd8.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.19.45-1e3z180uzo83exxqsp6xkb463emcihr9cgjiu4r0w5liicskvo4ga4y8zermhsij.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.20.49-1cdlm2v6xqxntaeilzzhj5ya2lz7px95havmntkf0iy2j3pcg1rg45614ixss94y.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.21.53-0peq09g4let1a3oe6btjjc9twsvptyol2617jsrd74tev72bnq4p4hnl15rwehft.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.22.57-7f3mlg9f42aqgeppittn0yyc8zvtm79m0pfxy2e2pkdo00cgtk6iwy3e8a2snylu.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.24.00-vvh6lue35vuqx25y8jbmsbhvcou7wubobzndmo4fapz8vqodq4lxbuzgvyxxabte.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.25.04-vp9oldk2rv1cb3hyntsvgv2jm19i9jl53tfbgju4duo6i3mw6i5cyghx7f0so9dm.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.26.08-xby2k9n5tvn5yvgcv2pt8w3lj9kzhgabkk7jv7vy1fqqiz2y1ocl6trp8l6t4t1n.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.27.11-so39f46hjs1x36po2lqdq2coqg9ruayg3fa574elb83iqesur1e93t6b2cpg97jc.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.28.15-9ciehkmarkttk7ab4845w8xwpxror4famw7a966g258pzedy084gd9wosyec3169.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.29.18-pfzdnlk4cxkhvphpdkga0rpcrruh9zu6n7empaijmju08nrgf7g1dhu9rwchbrza.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.30.22-wy9jnm2dolb0cxc3xatuqmwzcr06ejj02y106295wnyn7kkeggyhnh5oopqswm74.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.31.26-pnb1jwlctzic43nccfg9uq7nqnrp6j3emd24yd16mto3juxgngvte2xzybq2j1bk.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.32.30-ovoye9ug6fa1ymhdwlpu3a7c30rgurhigxcn0d522p4wdl1sk2idqgo4esk749p6.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.33.33-jzesgce9gjtmcmeur6f52vsfuuuh7jxhspd5x84uri3rfm54unxon3qis85zx0vf.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.34.37-2zlwl5rcktzl8wv4uori7ob9l49sernl6lxt6p4ljihq5xy11i39tz8zjlm7e43d.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.35.40-8wpjxzefqyeug0lkobkrg18obxj1qo9nl5mvscrudexjpjuydohwgin55s9lg1ma.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.36.44-qflj8bgbp07h3z4rwf3qcidd1fw3jybvuxi9rngzufj3ehvcwd9bjktfhy3gftay.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.37.47-rpl92s1j15jmamm4yd6juujnvme66xadx8gzfttakwg4zcsk5vuy7geiwzvniofc.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.38.51-f134v8cb78y3yx08ejtdx2isshvjbhz8c0833o77o6kb8ttoswngbnwyxf55rsyf.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.39.55-p6wdg5eqw8q6os5qkb0jopiup8rozi5zkaqtpl44arklkz0uwq3jnv2j1osqzssi.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.40.59-c22971ueo3dejxy4gk1lqlwprx5f8y5wcnmx1t0jrccqe2jareo6705f1f125l33.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.42.02-i2x0ubbmnya1myfr5rqrwakqkapw8x6irfvlmi05aoabvmaz7mpqp0y4k59luooz.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.43.06-0q2c81anxyzrtx3xo431lxwe8py17jxmhzwxe4q8sdz9n0iuus6uy7fj875zmse8.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.44.09-o7rep1uk8yt90z8p3mqlojtj0qx4hw1qy5rzlyihra003j9k01z6dkalnfc27i48.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.45.13-v3tmgkyqjhf6hxqulswkcyqzj8hkk9ttgbfzn7fvlkm4fdoc617zcztcyjjkkfou.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.46.18-6xsolwtk53clx9uqdomaf3u4bwe5xauzjix9knmdkb1upcz6fyfcsa7py43fmtl9.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.47.21-sldqxbn0zk1e3l44s0xnixk6brj6ev3klt04zg77dn79g9rs99dln7l1gany6pwu.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.48.25-3iq1jtgu2o5h9p4dnuqfin0r24qhrp088a5t3s31igxxgrq3olmc7q2xo8amfsg4.png',
      lastModified: '2022-02-23T21:31:28.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.49.30-r86ju9wiab4hz4xvqn4flqyyvkyc6jxh46kteqzh73c7sqqaovut74f4dzxgegen.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.50.33-3rd4vf95jned9llke998vai01bgbzoou3orl9mrr0pupj9m7fmnwzcyupe6ofryd.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.51.37-st4qw7pt7qdj92b535q5h98tgxdy9o2wlvvwsqiwrun178j9nkcauxcq3y0mjwz2.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.52.42-kx7bpwtzrksszdqpedmasxy56zrw4gms0prsgfu7h10sennjf89re9kjfaxhw2t3.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.53.46-q2qa3nyszmqts8tlb5s7bv8dnf7e0m2rvzwgw029wex62dwm3fv6gr8s0jgr8j3d.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.54.49-xqp26n0ff3ypr4pxk95c0a00mexmg3qstaimxpznynd3j6rbsxjmqlkax8zv1d59.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.55.53-5jm7dfwsed6iufwthl2qwgzshxgyzut0c7r2hthgo5zal1rqyblhb64vex0gr91j.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.56.57-hslf33gk9d6prnqnoeevzopyqjvis2iiblpqu9yovsegwmjl67tsdz6dgv7mfypo.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.58.00-f4z8d8pescxmyar6q7sxpgxhozb9xk95wq9rlvfhnfuefjyj4cty6n72zsj4l20k.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-05.59.04-hyqfbh53nqasrjx7qjvlgkdd1o4y1wvtl0txlwrnku1ilzrv4dedj8fmj1ore9nb.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.00.07-1zrni7qrgv915bpg4efjc7r0rjpz2q5bjjj87nzqt96oleei6tinlfq9wsl6fidk.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.01.11-lwgznl4uoc29nh5dr2w5p3z81m6mau2nwcxqhregmkpge679sypg40w4g0uv2l9b.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.02.15-9gn2esh8asspmcdpfv0pkb4a22ser6cra48i4m81cg2cte4hq0a6tw6n5bnui1ov.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.03.19-b700ktiblsgpf9xkrr17o79puhl5tdh0wodimrwlyiectt8swpkelu1qnj81az26.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.04.23-i1gfkfmclu2lvfs9nl469r66g2sffki27zo6wfvf80b5u41rv1tv3s76ap6zk6bf.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.05.26-e89kr8i34kg940gulfswlu3cvaskag19on306ab5sg9ckguhj2lr71oh9lib0pbk.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.06.30-slb55lcl2uo7oe9ckqv26flmbjgrr2kew8j1qgajpltu1bllxbgwxzhzgihfpgy2.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.07.33-2n8cbx19tp339vxpacfzfwjxn5cem4ji3j5mvh6rfyt88yz275x91eku8hrn0xwm.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.08.37-llbuxixpzt6dqqkrp025odn1x9d7wzyq1mirmgzo98uxigm5soxrgqs0swde48c1.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.09.40-irejh2iha17zoa4sis3hij2zvtk9on18fau37cnm7pn7sm2ua3xu1cpc59ta565o.png',
      lastModified: '2022-02-23T21:31:30.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.10.44-qmvwrt1j6u8e5r0un98id5rauui7n60urrv3h9uqhrrrnbjxbcii3vzy91aytksh.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.11.48-iqgwah0c9wm0abu1r2dov517r5aestu0u58pzl4phgh8u8nwza0jvuir8whwh6xg.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.12.52-kuxrdi8t51dqjt207bpu5p8ntc4xb4s3gsxsloo31cse1spni76btw1se82msbb4.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.13.55-5duj8fr7vmbe92n797hwz8ew8tpjxhf6lmjonmnevcouqdg6yy3c53ouowq3kwh5.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.14.59-c2scsesvhfeumltgnbf1fsl19myeo4c291u7y1rvg9zc9rr8lyedw8vdzqbsxv4a.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.16.02-41oa3jpv9ek1ktf1hpysib2p37fd9yy74v6y2guuely2oz5bykene9bhumz1ggv6.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.17.06-7s9b9aomitgd3rzjdakhihh5illi1nkie3ikatn2fvlcbuw50g7o2ey6e8k76uor.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.18.10-wqk9udfe2i7d9m3asrl34vy4zq4jdx29soh5dwfriwne2t2ug1z1kuljivzbeoqr.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.19.14-25m7z6ryxuvtxdxkgxow26xkab4k7iwbub5jkls1bbhupuzfaqi9zlvb7bsml4po.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.20.17-l6w3icu4c5tgud72ib63uprtjue8bfuxtqdij8e8l1c13ulm39kn05p68e93y4d2.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.21.21-y5ozo78opbsfyw68uvx4e0h2cn02gls7ko85ml6kbbcgvt46pjcllz6wdd2t7ckv.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.22.24-rij3o8ivbxw3pb0wx75by35k44n32mcsp2lzf5x67puyiahb7y5wbtdb96zm5myr.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.23.28-sbli3bs4auefvo8gtqo49oby4js6ummp5z0351xfaizfa39i3zkm2xse6dzdngzl.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.24.32-1wbsnh0gd4q828anl4otvnhe26f8t9c4fok34s1eavwsh842j0y8faquneaz76ok.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.25.35-mx1x8oqdxvpuufx9co3ze2371550xxvqkfemeqdmd76it32rhb6x94echiz46oa5.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.26.39-72bjjrr1p4nw0mhx1cxc5xxqcd8j95wwwux4wa4w1qvdfoqeg5j6xmu589sm7hws.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.27.43-itfrhqtvbdgbfqy6p8f5k2e77yz95o6gk0ch6bi9wa3szmm6zqi8vglimnhtapio.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.28.47-6w234kl94zpvw7nh2udvy5sgp4fhgsaep6p7fpruzlx7jz0s2abmkke1ef0uw86t.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.29.50-beywzx53otv9s54s3kdobezgb88wh46wv7m39jy4wm95c3t66gttvbfrnctcaooj.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.30.54-vdxmtfghm31h0v90pcr13zu3nhx3mtk0i9a7jwybbywqtgla1qjoyv2ib18gwzyw.png',
      lastModified: '2022-02-23T21:31:29.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.31.57-634mftnjrgbmj4zrwdnt9u9rhd3ou0utkkrjp8plhumzfpc0qfoalyb5s1wwa4vt.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.33.01-8x00t0pb50gwfqwhazhohgpim6boqm82o1zw2apf524sl2gyhd80dka5dgn0hsts.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.34.04-3s6n83e1b7glfrlhfju2vcy1sfksnp3s8wbdquscd9n7zogh91yck9sh4kt6b0f7.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.35.08-qkmveveqprr3vlx2v2al3shtpm90y2hkj31pri6zovxtwq6igdunc10zhk2vayc0.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.36.11-tly8wtzs4onx5pt2zby3qca1cg33g464cf6zxtif8wgru5gkourb5f3d5xwjnwuu.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.37.15-k3x2gfuo6eadtj8rnm3882n4sv8sjepizz1mmmqk1ljadq7dy02oxjaqd9eqngmp.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.38.19-0e15mn4tjz87zc4h42ebbnxie7026tyj9fuunqefjonzwhiiyprtogyvz7t406v0.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.39.23-rna2mc3407gzxu7bn9mcl8tv4iwszgu6pkqqg1mmjlrkvg2mlrhyjo023sg245ig.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.40.27-0f8ofm7vs7wzo8838zki03qdxa8nygb6bj9fyqqbv63b78yrqenv1yedpa2ubwxk.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.41.30-pf6kv4oonfl7eedsjoknozvr91pwq8j158la980mye1xf980d8wkth19mr0i1hum.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.42.34-ml6eylqpu0ti3d5wlio78pebqzyhb1tp9nk6jtwk0kg9263475oj2f2w6l98xy1d.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.43.37-kqj40m0lmelrym4f3b2155yaoa28qv50xij3omgtsfe028fspm6xqaa1cys8jt1w.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.44.41-97zv1pcfu51p86s2cylbok0qaypb8npsy08jni9mzqgjxvexbtfcqlcswoouokmo.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.45.45-4qu184d7bwx1syw87tutfj4akx98ezbdie5ncpc9ejcoe3ybyl4kt8uq1884g6j1.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.46.48-rc3h7l5isbph69zirrl2y836iwa1zsiejyyrkd8ce3kkdnacpfig7lb90leb219h.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.47.52-5ybh5wd5askhsily31n93hqhj8ngdichos32z1jjv7epqr069sb4fo13uab4bnku.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.48.55-irfnt8gs1rhe73kwyw01vawy9yf3sk1wa4lgxaevxhmm8jv5miqz5vczqmp9ohiy.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.49.59-zk1vpqu7c53t7hneq5duwxala4xmxy12w2occ54axqlryfw60i24zild0b3p8fgf.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.51.03-dpb1jqoq9wmzf21nnbs7zpbabidll4aca635fi7lqayjujh9mzjxa7g0j7z3vzpt.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.52.06-k0yy06k0augdw81zw1tezd379p6j900fcsa2408p5dw8890flfjs2bboo69q2vj0.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.53.10-oi9hmxknu2g50t4sden8z6bx882emo2sycniuau6c29nxlcuah9vt4s0dm7apxtg.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.54.13-ir7upofzt18grvsbwbu2ruzgx5jk4ylb1fxk0odavx32w7drt2lxu2iy5pm38bde.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.55.17-ibpnojf2kcnbu97t7p6tudy88llalfp2gd51cxf0817iacsyph5p9j4i0py0b4w7.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.56.21-l8i66yxz9j87yh1o3pwutl2r6psfezqbqse41a1y3xusqrdivuxbwx963plan08v.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.57.24-g92fmvk1buf14ptvs2wm5etk4ksd58peco9c5ko4sdjma1d0axfzwn813tuzzagx.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.58.28-gvsblieblsx5jo04rnir077vi57qe2uaskrdmtbzd8sf6k48ct80xd1nemxx5zei.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-06.59.31-kvyvwtqxf5dvaixj6f68zq405ltodrodjn0uoyey64vzbq4m1tkyvo23hp82tpym.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.00.35-j3bjz0i1ixsh5em1yb3jvd9sdkwxfwkzn3n8xrmpgoq2a591zzf4czasvryzix7l.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.01.39-ji3wdpterkhxp62t8zsf4iwfep7ioy32egisaj4jwmcgdnpg6zxeouk0vqqw04v6.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.02.45-0qbsk7xlcb0oqnwrufdbrgxvk09desvialke7qvuboa5n893e58m23nkrrrxibhl.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.03.49-o1ubozzr7894b7wlrz1ffl48mfn3v0yrtjqfgcbk2v8sidp73x4fy6chnhf4etmf.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.04.52-3zjc7uftrd3sn48znv7ehi5ny4ulqssibwpkzduwxgg7pfd3gh33du1vutn2h5o5.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.05.56-7bwsrqoeasgyvmf6u846xh1bhf52d4pmalwt8pf0jy0hp16p2pgw9rhag3haxvkt.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.06.59-6lo5ipba95oaq2q517bdbw1w20wx0a50ifbsj8mhvpr2g53embryzzzl5o1srxs9.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.08.04-krsflkohcf4h1xdcmgt5czew2wi0g9ntr3ueodayaevm1p2tn60zdjb12pa8d0cx.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.09.07-6zhi9c504g6gbxopod6r1ci5q16bmkcx0l6ticvpixwoi8qn7ws5n49ipmsy3soh.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.10.11-zmg8sz202z4vvrpkixa3fr60yu0njcnbdvkvfy65k80fih8lyaqdss2wg0r3lr6d.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.11.14-wvrjen7nqfn1lqh8ard4jgx9a8dgl78z8yh8r3mhkp47c7gk3ezlfi51mxsr7da9.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.12.17-p1gxyqbd2r1fjwedn0tttw1pjpg7b28bhl7yad2rilzlrbxkxrdnzuxnbqoriiyo.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.13.21-2rm7i7jvxftacwhqumbtd7apc8sn6h89r639ki48pc8gtn6tv91ttvwn8yxtxz3u.png',
      lastModified: '2022-02-23T21:31:31.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.14.24-mjxvu6nngarwwt0ltgvfq8pivgivm1lc82whfelhkufumg5j6cfsc9dnfzwpzst7.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.15.28-aanoymz68kz66a7pfd7f6pqhrvo4sszml4ntjme58kklm8hncz77biifjbepufwi.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.16.32-bpsf3im0wuuscd0unm4zxi5gzfvtxf6fzins75ue8879pdmhyxc5o887ogpreo4v.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.17.35-vmcgna1fx63hboibpfqd0889s2g6hf7xw3c94p3dmr33fhn4mgr792x40oovu87u.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.18.39-wr96w0260fsubsb4dgu5rz70gqjotphdcaocjw3wbbs464xqj5o363qcxu7m172x.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.19.43-bfj54xtmmn5anf8m6mdusml9nnegf1skp3f4fn4hxiyva9lywx9h2qgyz3ibds9h.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.20.46-4370m9vst88d0lq7t9wxwxaxij2rgefhyw2f7mnmw2z5co605bvkchwm2tm0shv4.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.21.50-7hb5c65iwhkc4qbjc7dpc5tukscu2hfvrqfv94cw9wc5zvxhtfxblwkhk1iz1a2o.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.22.54-hko4gjtknzkwd0wk65n915uh6pnyefoh2tavc2pwkmze99wj3km44ehfpshoztuh.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.23.58-m9m51qgo9wl28tu3sxanxgrxxc9lgpzwo0m9gfof8enzy5pchr2wcams4wu1h98q.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.25.02-mtjebfgljywf5wapsrmvyofe6b51tlh8eqidabu22qswih08354qs8uduypsf0wr.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.26.05-s9nd42lg8jztxv2nktxyl035c7pdtyeciw194h7t9srnbu0s3h5i8xg2gv49kdw4.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.27.09-y5frjrhgt7yv4tg257ezaqtxrfxq9j08b446c7l7jqocx2pjgn4e8yxivcr77vy6.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.28.14-u7j728i2nyyogrvwhdlxzeha51zj4m38m0rc8cypmyokwlkkg7t25osrrrqhhrdf.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.29.17-dqtbprx5i2fxpqjqdea2gs9due1ftbzq4g5jdkuej2jxgccormb5xnj4f4y00zzn.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.30.21-d28gyiduq8nyevomesqscey7f8b19vxvt23sla9ev7hnzrsb8vckvfz0au7oykcc.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.31.24-hrm0gz6bubulkta7fru4zi4805k5pd0qdvstmbk90s02cyhu3dbyu4exesx30plq.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.32.28-f64c4w28dz7hukgpnqvblgj60e1y8jlmbblq01of4bp5ck60epkzn77ssvwlncwg.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.33.32-sbid4mdee9f834itcde9thjrvdgqhjg0mlkuynj8pmfjjnp5lcgeu8rwq3kywzmk.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.34.35-2kwo9jhekiwydaumqinasmdvlmf6vujcr44i6qc8n19lje55zipmepqcnuh2fryw.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.35.39-oj9ri1bc4faacox1cynxzn4oioibyicqkzi33klx3ih28d7rmi9j88vk6l1ekwld.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.36.42-cwcrz1i6z4v884p6nvqzsm2483c1vqa2cvfpn8zy41srl6yg72etnujwvo4zvne9.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.37.46-jd80xjthilaqcuval6nrr9qx9jpr7iwmm4tavo1ripa6500thwapabjimn8r81ak.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.38.49-l3g9xtgphdapn339bgnu6aonhfnjq94sgjcud4opxwb0bubyrjlcood35kzp13p4.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.39.53-bfmszrkj50jpv3hff55fwlw6diivmdkn51m1kc8mybpdcxm730ik75f5zism0w3w.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.40.57-5g2gs3kd0bck84lrprg5ejigcesx27sjcu00yeym32hq5w4dcnopvlrgyffgx9ux.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.42.00-qtibdueubbzipvd99y1aqgx1ifmt55lhuunz4g31jayqd6c2vop2g5kw7rtgorl0.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.43.04-0meobaec37bvf8bzhe9kfaftt9ggmyaor52bwxk3jzfvdxmnmqa8t4v1ry28wap3.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.44.07-ircvnye1nksh57iwt427xqpb7ditfre8xhsi63vnhcb2djr87wkdsqqjnf1lafaw.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.45.11-ro6m9rptlwfyy7johc01i8f4zweuzd3057l4hrf7mla7w99jn8asapr6gxfj5kbx.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.46.15-r13f3wlw85asxt1jc7f6fn4d049ispnaze1hfo8vszhvffsenomjkqozth0tr716.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.47.18-9eku2c2qpm5g9y6jz8hhv5qh5pt1ugznl6eb8sqk7ur787sgoiq36gio1wb759cl.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.48.22-em6bppiwj47xie56pgsl20rhr8ceabpey7pl36fbcpefyncb3eseny7v3z1ubdr5.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.49.26-d6rlt4gnu20qijtysbwrl8lt25m6it6rordbv2mypetc8ynobbnmj5d06e2mje9m.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.50.30-dq02g1s0wmk5pemgp4b0h3ppo9yw33lm1dh4z8un32wwh4y748vzaxo7hw4wlyyu.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.51.33-fhxwvqvbmk2a9yhxodal4541lr6kinwvxcfhe3ecu8kwgs94enytku4lfrpdyy9y.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.52.37-ln43igntkfrmrmqr23l4coaq2ph4rvdla2lj1yzsxj4ndnm0vmajat6umlm36hco.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.53.40-npi31l3svz8yz65iz4cctr0x1gw4qsh27r654y6i393p1a4hlf6rgojyovoe1xt3.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.54.44-a5xcamjc0qofquqp3d3y9ajn466un6w49y3zekei28l1kxj2vsn67370d9rv0kn2.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.55.47-jzevq2d0yvhnls4vfs4bo7vm8wyh1d02wbss27ae98bgrsdscddpck2b0ieniy6k.png',
      lastModified: '2022-02-23T21:31:32.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.56.51-b3riljy9rmsll425t8xkqdmp4u0opshvgt1dsekrfq6qcbxaxzecmnf3jge8yqaa.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.57.54-77xwgkwhi345mrk3njph7m0xdv0jg0fmuhoiyccqt8a0jg0pm3edeoopnwass2d8.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-07.58.58-cuul3b6dcerkin6njqff984gc8amf37gjx886qadc46eh8mpyrgjbbbmzlf57dxd.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.00.02-2mdyjwq33fsys22nd76v13pu2gr28wqgzg7ubkmwi1xcutx73gkuv947e1pj2m7y.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.01.05-6mqxpt0v62kha42i1jzaw6eas9p10cp4vj03ozndgjs11whlga4lab9r3g2hh75e.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.02.09-1y30cxk9olnn6rhxnlg5jl56y14c7m19h6etcm45i0f5ciw0muud8vpf89s8onwm.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.03.12-hzsjc47zpjpzhl21ztm93gm8wzq6ledkui5ajo2hrdpxzxppdzisndlc4i6bs2u0.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.04.16-5v33dgnvj2a83qz69btcqs8mjsv3aiiuifb57c80epjp46vos2w30t5oygw911kx.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.05.19-t1agotn8tblmhlewpueeemiq11i1iquuwasv0duatftojfzyod8r5movdgynrzyl.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.06.23-hz9rif2npyqtt8oxck8ntgntvpyfmkc19ovh40vtztof9p1e6n01vpki2jhq47o7.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.07.27-50pny1h9cndu5b6xa0y773a1ln7sonptpoxjb72ewpobqoyleltvwxl4ncw4yn6s.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.08.31-lwo6kmyfqur516y91llgw0zc6njh22rovcln53atigtc13n8orfbql5g7flxvaag.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.09.34-jkcvx90bgka6fj71ft891ylw3fz079vdu0of4a64nfaocuzftq0q64ecb89kt7kn.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.10.38-w5qnrg48ypf9kycn3cj4dqnl3yn5mfklq2z62fiyxpyn4wjpbsl2v406i58unruv.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.11.41-foqzoihle82nwviyppegq0xk2crqh70bixzkbv4luyoofihfiz1yoheb2hp58lj7.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.12.45-vkn38s885knyyn3ipoq42zk4b8k6olrvovq50akmpbk7qcmuhzvorvt4m2bfsuu7.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.13.48-28tb56nj9bl7vaaitn2nco4a5yg0h1h87xeqlnxzsu7kadwymipzt5ch1uqcphen.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.14.52-txa9a2hhjhhncdf4qeqsu513sxpmmdg65djygydi6bf7uhzjas5xnvr1ho46k2kl.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.15.56-55n2z6lj32ja23eqxacqzyjxnbsxg9bcv377hdn2havefcztameau7v3spksrdkv.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.16.59-act2r0n2rz14psau893xj0s1gmppa01lgmb7s9mbcijwpof14tvxz82x22hrumw0.png',
      lastModified: '2022-02-23T21:31:33.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.18.03-9xjjrl1r2ugoak3hfofiwbccemuwgfe9k8ru9atunx0039qq0fmeddylucck8jn3.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.19.06-54g4rxo33sqpo2nolhfp4g69csiv5ljofxh86p56vjz794as05v5mguavz25xcib.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.20.10-ghz7am1wje562n68gsukt6hj3dzg12wio1k42978812zx1m0tf2j87cj6uta74nr.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.21.13-cc92ifn5m0sewm6bqotws67qsurqjsssi51uud5ige9gsd4smklkp8yqt9yvcqfa.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.22.17-m5o6nvpgaig03yz22vk0ay2xpsb0hgn2qziq8txhirw8u4zivgt5dx4x8wy5iejc.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.23.21-tjo3zmnpbbulcclq0e9y1gpc3sxuy9gud4z22h97dqot19w4oc5igpyin1m4h660.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.24.24-2z26u2dclm2lyjjinga19bf1gg1uuvbvyccqfr6ulvadc45vavoczokdvsrnpp37.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.25.28-qisxjw6s24a1aov4izy3057dznauy49ca2gx8156spr7irrh89uamlun56j98jyq.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.26.31-jwlqzv0iqy6djuu2qlekglculmnat4uqtq1oy63dbbqyo3drvk7ih6a7j2yy47xc.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.27.35-goj9f3y3hevwbyodogkqqux71ss2oh7nu3r00o5fkrcg6gslqcw53cqqf2ikpedg.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.28.38-fx0n8s2ifz5an83h93spvydq44g5ue83wp64t9pzfdviztr09fo19oqmxxb7o8f9.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.29.42-1xmqqpahuto4cc1d1rt73xcsznusua8ssdpsu800envrzugpqltsm8q48otqq125.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.30.45-vzmgrhqpufjqho34al5f4hb3b4w2oj8xqybulpeccsxdln2ge4zcm5cbwwwkuw3l.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.31.49-ctpzi3b67b3fsxhteenu7b38c6e4hbpkaq4193y9ell8akoewn9hdd1q1lrsrlo2.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.32.52-qr5kag5i47ju3bgr3jgf2wiguz1xpsi8hyr3ic6z93aozkhoei40pgxnktf6qsta.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.33.56-uzy9emn1czqv6ucqn2kpkfns7yr8gbovj2lg07ju8rm75qxeh5xtt4lgvouoezv7.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.35.00-bnq0xfohuqnv38tlashqiergcbfd3kgvs1wr8395q1oj4u9ry4tykdf6cgnsqiuu.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.36.03-1pt0s12r46zf605w8fyl2d5f7jbgtwx2gv5y3u6xjc1d4tihrx0hanb0sinef4fe.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.37.07-0vkybpjshw6lrilug7phieztj7he6c8f0zw1vddemln6oe93quf31k72rkuq6asc.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.38.10-ijyotch211ijnydx5fa1a8x018qtos7mvtatdjyig7lagx2wq892eduhcfoqk3rp.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.39.14-ckfeth5wak06tg70fjd0dmd0embtzb14qsvle1euzr63zrke8tkml0hu9pmz9ttn.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.40.18-ksoohu7y2qpeuyahnuira2y0enrk0vomr1xg4e4czdkro4i2516x39rr6u7vz406.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.41.21-as2xntlufqf215ja4s9f032qifurif4o4p0ydo46sz1dis2wu8aonbv8csk72di2.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.42.25-z3ky9uxm2xwuo7vdkjyn6zwcq6wdwwpd29vi7e30zbjg7spz0gi5qrxlgcxjmdz6.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.43.28-f51pjdwqz74gvpa2iyakfm171m306tv85jzwvo76abjisnzxxvpefx4rbklqz9dt.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.44.32-d9fs1kkbso5r8rc7ns48jqa8wfqd6mhat80k0nx0xxe0g1gs8ivaiv51wykwypfa.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.45.36-z8hvn5pmwllf3ucsr4079vnq7kuhkhd9czxn1dz4nj1w4vov4hrzuqjjpu03775h.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.46.39-w4jo4r5z60nl53zokuzpogcxvu8ahffbh42jfjddq3ac4kd97dio146n1jh38uny.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.47.43-2y8htd3rpjmvmdq7xgkxk6u29ha59503uiwhyux9esbsknoio7ua6tdpxmuqpc53.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.48.46-wcm0q53764t2gmj6sm6duoqjgb9dkvsuxecc80y107ocde3h8a043bdxwoztuxvz.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.49.49-mw70sse04erq94k2byerewo62jag2ombaqozam7imov6z8g5s21tbvzrh2jq0iph.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.50.53-04aee78a4wp2ckmmbtklv3l3u34tcsz9icgvswv8xxio4a1t90f8x30o746a4f0i.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.51.57-lwoyxo02zfy6vfqb6jo6d7hiuxm2h8s0dxyotp3lrbbhni0denjalkfj83nsinz8.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.53.01-zyy3l60af3s69pv8a0qrhos6r3rbwd1pjfnz8mr29quebuoq4tzpl5b8ipxin1lc.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.54.04-09yes12o5x0z4u9bfkgxr2q7vbd6cudgysr11i9u6dhcricf62mcw3u4q7e4ezzr.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.55.08-vz63ac83xig5ueagm6yxty1obhfmm705nmde387wxzl3wmc3j0ya444h3lxj53ip.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.56.12-hqtk97mkk1toxr3p2a2efgiiwyc8j5x8fkw811g5v94nvtke21pbrapdffj3jdpv.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.57.16-w4hwp88e747ek09weho7swk39rbax81fk7mn4xuh3lxucsb6zkpo6rzj16uw01e4.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.58.19-vvxerzfyueuipg7s5gwfaw5o3e4qdv5ymcsfsr29ws1lf05f8irijibtz44n6tuh.png',
      lastModified: '2022-02-23T21:31:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-08.59.23-nxek2dwwve6kstljkaac28uq3n9ajw45aktr8yok0n6ah6c9lpqo845otas4cpos.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.00.26-6vtc4y5fj3kaipcvqb4hk3s1wyzzmtonahj3jjzvgsqqc10vv9osevr46yapn5ur.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.01.30-v2crsmcavdh8k3bv5dlla4hwpezjsn255an3yu4wot794wb4cdadz14v64hnfvps.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.02.34-1qdg7nh83f4lw3tfjlkc2ettmk14jwyzmztahjskxt0u8rafjaz37st2v3g2h6xd.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.03.37-xcw8mrr90wqrl158uovsax9c33p8z14kxhxog8c5r76o6vwq9y859x18onvjrgjy.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.04.41-d51t1d8l5k8fs6768blv1mibz0kmjqpxzblpvcc3mt0tmexr09son60jzz37dkf1.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.05.44-usk7cqgttx0nv8mpzerbib26l05fshc6c2pg1i7zqvhm1e5klhkqvo17j7h7o1kx.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.06.48-6bbkge9lzyki60t2yx13e7cbtwep8o6hd3s8mbshudtpaqlf10nlo1y35yxvrq1u.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.07.51-jwmx818c0xfrgcnqmkse258ma8lp5blwxn1lurvevjnrhl1ihkbjjhv8dcq85oaz.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.08.55-jbingtahol4qdrqp65r3ijfkvavjxtootyrg91f88rvo4uk2c5wteekp0w7jkion.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.09.59-56yo3rl7w8cext9qco357z2ou6yfclfv3mh1ybo0f6s7k4k7y3ibltv67ttfueev.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.11.02-154p32xvm7isj7eb0g7q1vc45csj0ox3bm9tut1d27en8w0cthghmyphvcbqc2c5.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.12.06-kv55dxw1a260v5u2qj3gw6eg03b0yq4l31e6jqsj55oduz8x9mi4m91xum9cdad3.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.13.10-xgrfi8674z23y1kzxkuebuj4lautklc85ovz2pd7c8q139af9mlyk2xzteferp1t.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.14.13-38mm92t1ykosmogpten64l2qszrhzn0wcikngk14bnut06iotqnylbiso38ihm70.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.15.17-9fao5yhvp1woluoe6tjclt53fujt19ulc80aeudnx6cbfy71u48zjth1a1l3hq4l.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.16.20-1wyw9pqd25qs1fw7aanpy7fkij4ti87rz5jx7l8tyseqhg2z9bi2tkrdm2k5o46x.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.17.24-hhtgqrmir1pi2weupdva4rx45ivrs4630ntyn0ef6jj6564hc5heecqmjvfvmzrw.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.18.28-oijvypj8n90os6yw3d3pft6rt3p50t1ut1vy89f4r5ceapjev4c0m9domticvcl9.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.19.31-nvpl6bxm1j5932tpgygg5dz5vrvzxdujv8jzbnb713nmm43dua9m6tfpvy6xv0qq.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.20.35-q3dq888jesudv36ejygrltkacuobeaou7xo28db7aicy339zmjkpwcemot5x7bcs.png',
      lastModified: '2022-02-23T21:31:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.21.39-fyf45bairuxc6lk6ig9ikoj3zstgbv8hmwxjt65gjve2c2lak4i97a6oqsvf9dyh.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.22.43-egcaftcquv1llch2ztvezyjem8noqfn7othuhgv7s35xp4owe4k69vw51mlaxkrf.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.23.46-15j6v1th6xjpf28jypwlenues1h7ke327lck24olcz9l1magyfc7ueif9s93f5b2.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.24.49-r02uikc78ecoqj75ku15flq6c9cyvn7tgxmmgvh6i5kva70b4tnnvguu5gyz6a4k.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.25.53-luarp3tbnkut1lwn6d666a2por0zgrb1sy3w16stuuxjro9qlwy0z03qu4yyrl36.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.26.57-55s6su7jbrcgae7ld6cipo2sv28814guxek19bz8ps98j0efhysvrmbdqxrdnbfd.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.28.00-l7xtmynkgdnjg9ukoohhm4o9wftou0al1jy4via62kwwjx77o3afq153vxb4zsff.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.29.04-l3nlgn21uzibiuge5utrbe643neq36f1e8h5gcy4fgke82hivvjhz8e24pk12bct.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.30.08-4jxbeg4w33d1isfxptzcdwbg12tydxp98w1kdi5dskyttro4rrum6ggvlb8qejhb.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.31.11-c5mwzj1l6iyz6l6d1u1991909oqboe84lv3b3ej71klgrbbe84mydc4ujdmua20x.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.32.15-ybko3ixi9j700qgxd1cbxh6htuwjik6qa24onp3jxafjjbiysn9jr6if4svqfaz8.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.33.18-pz8h8mfb5rgcnjddb6vo6q48cag9xscw1g6kfa76xjr2z9ge7bh0gg9jc3fuo7nu.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.34.22-h21pydmw5h5t2igreq3ydd31to4l1zfmwi8epj4zrrb88m6slm9po8661ukun9ed.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.35.26-i02ptvqg0dn169zfhgzbeca7bm0htkdjggig6nzxvnveor9u769e2ngmelc7eumn.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.36.29-61e6qeh2f0cemd5c7ceernfz69falgrjre6ec3aleocickgm548egvyaa6feu58k.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.37.33-4kvd4j0rtwxo3vebcsb2n37gfdr3ww39226pafuy9wycpyy1s91aqn52lrtolt2p.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.38.36-d5oyfst5lo1tjs6p6hcuu2r1nryv6hpm80qtuotjy6z188cj3498tg2vmsviuah8.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.39.40-wyw88mlcaf69vdekvzy1gccc21mfzp74b3xpojttfclfri4ois7r08t9uyvkpel8.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.40.44-j7d9lxxwu7s0lj4e54bx2yxdbb66bpk0lmqb6xe2h4f6flfthmi9yeljduko59k1.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.41.47-1c23k65bkg25waz72wb83r2svqm6018ic4l9ws3b19lgt630zqn09jegt1pf1ktt.png',
      lastModified: '2022-02-23T21:31:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.42.52-pfmvlyebq16etuevacqqf19hkshzy8o2uix1y3qnx0mpqrinnjp5yhi9srp18m7l.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.43.56-vd11emv6i53hx6ic3ydri7hd995xl0fpkq519lxzczp68u6hegodl3l7z7fpu268.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.45.00-pomegeb7u8s3k3lz627kwb8o50fhothdbxh701ycseansd29yn8pciy6192pvfml.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.46.04-jclnp33unyc8jsx2dloqu0qwb0ufnkuq9worjw2sen7os9x8xra3x75358cpguew.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.47.08-k8nou71tl4pcub54k3ncfrdmzeaot2sq130wp18igy6h22rn006nrjfoqohkua72.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.48.11-xkn1bz8uw5r5ydwwstjq6jgt8uft2q9wzwzhhy0xjdwvbduv6w11xr163972n7h5.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.49.15-c2gy02qre39iuciufeu3avoxbjz6h5iye29igynaqtkzkxm40ag1kp5uj802b1x5.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.50.18-nc3xddy1w1gdz5az089a74d5y7i3r1byluyrubblz0t1s5htgort2urev3zioms3.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.51.22-pacwsimopu8yjl7pesf0r1cmiugin204itvwn1aiskwgpcftecdlb949csot7ett.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.52.26-jh7rw0cpbrcxg7zon7kcormyxkchhe1lge8nf7lejgprsi920uhtfp6vco15sl99.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.53.30-qghfc7opa375zj3lu8pf275nhqhmyav014ku62w2bvf8kizhhfuyiudm3n1dllej.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.54.33-radrnxpahrjjcnu5ejg2l5r4ud8gm8raxq7esrgepl27wkykw5zria8drnk73p0x.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.55.36-y9slzm9eta6kfp0p8nxc3elcep9w3nj84eicive5xx3t7c76goagt6m9k43j87sd.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.56.40-vigrmut17nyv0vlmq981hdqa912ioxetsvli93ekl3dheus3sa203yyl5zb8bn37.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.57.43-dw4v0rvhsqh1lpnc6vjkt9n9y9zz7gzyvdul379gx6gjz552n6fg9wwfmjda5wan.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.58.47-3eqeqz1z0406f4rj5j5lvlu7y26bpv2uodxy2qm4ju0wf41vj4uisr4unkc07fsa.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-09.59.51-xbrqy1caluv8s4xmgrdhboqmjyx4admuriyjez08sz9mx4zzecti02jnsylvqhqj.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.00.55-3m5vl0zntgdgxe4prus6cy7vkpc9sy5nl4qjfuvr0x7a5y2gepzv1sz6mmnr5ku0.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.01.58-s8lr551a0rcpartelui4ggbj1ryocl2jum3zyr02yok0zkytc6qwz4ab8eposaky.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.03.02-jfkcalsljx6ttr6y0yn7dgctu2kbykfswg0ece4c4j523pk8x6h5xt8h6i35e4ko.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.04.06-sjf2o5w8n0r3njs4mcrs352w1zprhzgk7j2q6dgnvmxegpsn4bo8xfznnueixttw.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.05.09-xt791gg794wbdg3jb2lg8rcqbrk1livimkio9qbjqu9vg4a5yte2geu8vmu5a4p6.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.06.13-gg67jl0u2t6ibssf6q8qfqzm6cgahn58whae3bh3ocvklwyu8nwa8fj7ga20sy5h.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.07.16-iyw38xwpq7mi37xwupy2vgdadq231dqxargwhy2mdqmy2yy2jo6r5cdlnqle0jrl.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.08.20-qugnfji4juy1l1uorz829own13ur2jpighmp0d06qz6ye0vt59ahoe8ojy0dv0f3.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.09.23-yrxrnruj77l7eyjfrzpdi7n7gek4r0btwequ5dhfvpfptfwqtax071w3lfyhyvfo.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.10.27-pm2qok4bcuwcadyilvrqum8uuwmumvijvuwpza2e1dba1symv4egvb6jgt6wbxcv.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.11.31-6gwiz5axrp37pb8r0artyhbo06ix5mvplj5qfisnfopftabgaj4xr8qks1rte730.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.12.34-qqxbv2w0gbhgu3q14rj29y66i7ed8tm4xtq98s1e377p7gozuvkws03ce5pvqgpt.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.13.38-cn5qjc0bii2hm6421kn8s1jx9dbsg0bhng9w0w4tdzv6mzz3mkrlpblj61b57bwv.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.14.41-byjdlaogt3hkfgpi96km8k8bb93gxqdzubaoq2q5zg7e90r4lr2aaa9euj5ok1ws.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.15.45-diq5vxv0kuhe0u9c25xqcby3k3m38ekt1fo5h5m4fhzxrgunii5z6qgvlokgcftc.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.16.48-5p8nlclrr6s25b59diugqpq6dvf1sknc8qrdzjey2d86aqswgeiymg6h12dt86ak.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.17.52-n71plrnqz0s8lcqtuydjw5p3phdn8gmvf0u80ikc0zmyau7dcktl8cz60uq40jom.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.18.57-we8q04kc6utadz0jz7mi21m7p2pa48syojiuonlz5x54oh0010ay6r6i3fjzwkrj.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.20.00-a15bewp6xua8m5mej50u8cjqrw3n655kkhfeexneai1gv4waf097zg5yy9k8p5jt.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.21.04-mhsje16xrlcmnco4i3v2aqakmzr05armcifho4fqg2v2s2kvd7m00foezt1prpah.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.22.07-0c2sl01z7l53wsygf7gomqbrkffa5gi3eo1ypo74ipbzfnwwn63zcfcp4hevpde3.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.23.11-ppgs4sugudb2zw4z76dzs1jhxcrt108ma3d4ue68igflwrsrdw1to7i7l177von9.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.24.15-c5wlqyqob5bdjno8xyrc3v4f5c605minjxmkbxy2c38c9bc83b9mfbfxfitcfvsv.png',
      lastModified: '2022-02-23T21:34:34.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.25.18-l4fjifm9bw5vzvwqkjgz1awu0k9kizmunc2pj4g11u99fqkuboh3zx9jhruwsjpd.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.26.22-mor9hkb83nup9zimbhy0gv7u4v2jc3kp6h25e57apveiwy9fugkce7loo8t5gcso.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.27.25-qdp3qmf9ohh3th5lub5nm9oeytf9i4nhgrwupo81pf5lqmshay7dj9foistthpxq.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.28.29-kgjmn7q2jlro16gldwekqoxozxwjn5gv510hwfaodmf1pjiklslonez2vrkix3ww.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.29.33-4mzy5fu56tl9b98wwn8uvadurd0sdvertfgrc4is2q7dife9jedkk0rtm9wnef9d.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.30.37-l6vah3b7twevkqdodmaciq5e1t5r4w65b9dk4134tbe9fv2gl3ieleaenhaxle02.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.31.41-ra49urgxmlktlv8fd8dbr2ye0469vq1qsc61c1izdavcbz7u2pjrpwllhjq64mwn.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.32.44-cglzxf8sjcdgge6ytcc2ggscz555zp39ixqtjgixhjkwq5do76hofn7gy70849io.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.33.48-tvoc1sw6f177g9jm2n7y8e62fhh1bn06awhngpz937eqw794hcsh3glhrsv5z1p2.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.34.52-v7tb3gacdx4wu5y9awdvigef15rxdk6ukumak1lnjzfti30rzqjjtp0mhv0hhihz.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.35.56-fsbsdvpmz8a4pqtygj6vtk3rztaa1gtdi36eecd2vrsd1ifo7423sr29anglhnhu.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.36.59-axsdg5s7us55lnahzfqzz9k3u39ii0s155qbejglwzzjan3tn87bfzljjw6gzqsl.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.38.03-wjgds2qgzf0yxx6xzy1pzncgugpfzl4pzor23gxkj31fmzbha444513jhhbfbdjh.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.39.06-x2q3xb3erbrnuf5fjyf3zytqukvh674sfdiyzbojbbvku0g3oh5ofcae6owpweym.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.40.10-pnutdhq8s0hriyofuabjhpv073feb89hqp6jf5p861xk8s96d99ie0fuahtjvtn5.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.41.14-6nvod1t04zxpek9tkrju2plu5sv41xlfg3yxf683199shi8fooih681ewkoieev6.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.42.18-4cc9w2xzedb1hfegyir4sikalozol697f9vnjkw0ku6l8c7ayeskidkrhca09itn.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.43.21-6msl7szfu02xg9e6iojjrvsoqquqpctpci264f5pbsv4l4im5rd6avfxl6qhyuo0.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.44.25-evq8lim7gbrvau4em20owbp2zbig9o5m530izaih8tnh6qqpix16o7973eu29iq3.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.45.29-wufud44l2ga8z1zifw8265anpgkmjxl5ux5aw564hfw14cb4t3rig4m5wba1511r.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.46.32-fcnwqosvmzvn65x7ds0hkhcr6r5v9kg2aogep49nqxeu1o389v6ik4haz23ue99o.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.47.36-muckz8jslrpuy9hxdtsoip0sj3zdku5er3y9rpnevie7jxuw91ze1crqiwdgni4v.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.48.39-2kvi1dc1jhaqznpa20eospvg8n5336psppd76odwdiqduxs1h0kftaf1jpr4uax8.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.49.44-iy0l8s31elf928ubsc5mzw3wrpf5a46dode7if2bjulfj2yw0xonoyp6xvjcdjca.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.50.47-rkwk3wpyg4imnjek1kremfh9ssi6cq5eh3lbnyadhfldpnzh4a667e06crewd1l4.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.51.52-rw6fonsrvyqmej8cqfltbw2cpoikjtdlp5k0gnndi1pv66pvdaoaleb59see6h7m.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.52.55-j31wbho2q9qluiis4cwjiap4edq7p39s4lvxxmyrignwfk0w2nwjhdmmz08r5ljh.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.53.59-96lhcnolk9n1g3wu72f4l84ps3yib81a24duwcxcb4vkb72rs1qawsl5uq9oewbk.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.55.03-dfkm26ulx0xxgu88swnheepweta8zbx2nsgxf4saelf4jmuy533omg1ar6u45p8j.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.56.06-cimvg4p8cdu8j7vwh0zk5imxa5nclhqwpi6sg0lwc2acen5bxad1qun0vekcmhne.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.57.10-qufj436a8zkphsf2no6gh0ya8vrnwk2234l64gqox9ycbuxewhk3q02yu54cbska.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.58.14-6zgy55xzwebqmtcdcmd9904ecy8ma4jbas3t3o8v4um0oj7vi2bjgtaino2k2beu.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-10.59.17-ohftqbua5ho5mklm8iq10a1yjo7bnr3aibimv2tv5uuicmzebqowilj0ppcr9t5m.png',
      lastModified: '2022-02-23T21:34:36.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.00.21-rsibztx5q0rrwcfi7re4adits0dxaijf8ruy37fwmjuctze0cb9i9bc8wwucp0zl.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.01.24-f6rm6lanoewmypqdhi1teetoqmjmumd01c78ntc3u1u26d0em9ynj99bwg0a4zj1.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.02.28-46syjk29prnxuwww0dfy80vaf32hmlcizbsaxe32b72cce8ajxf9qzhpkl1fi8e2.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.03.31-w9qsyg09vtipypohavzt92dhn4qbx7j1m8gklc9jba98d222ldpu94gcvn2ztxfh.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.04.35-t8whoot6yi2wyiws1b6yv47hwkyb4fjja4fjtnshl8j7imj792delnpefa5amaz8.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.05.38-io23q6dnwdk2ectlhdd1wt50q04of0suzqlrlijp6oi3sljh5tv07jgtsoe6qyyt.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.06.42-hzkoi97xfp0fx1m4o4sdcw2emo60793palqerjqslsddi3qxl1wz7wuy1jr861v0.png',
      lastModified: '2022-02-23T21:34:35.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.07.45-whtnmw7i501we2b89k19vur4uyqgqrjo09rz2oy0rviqucmvala8kp9jaod2z08f.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.08.49-6g4cswlk6hifxef6dlbzfys2hu5245a2d6a0mr54yv98x40ob98qedcj20nnbr81.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.09.52-z7fl58qbk65x69mrjvzmwdzsf2qb5nykhrmp9pim997mnwg0kwpqtkhw8zu9h4zt.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.10.56-4ys11r7fxsrh2652y2n3qlecr6o2e1o5g37zsmrqs5jgh7hgj9qw6as8hys65sav.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.11.59-gq53kbjra4v1kal4p5khtgsmfsnwnwa2yadx8aoh3zfpgmay7cbqe3dk7i30cy59.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.13.03-a16p938xn9c5sp42loaazvueqcudruzxrazcr2k3aykqhg8jelp6ck5qzmk2qa5k.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.14.07-dtrszc43aneuxl2yfekprrutrgii8lrhjlvojxo2pfeww51w1w56fndrwyg3857x.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.15.11-57hrqo27ipv2s7102mowrqvnbuajcpezog9t2iktpibihxl8rtv29w7tjezir9dz.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.16.14-fyx5tygb767decg3rnzo33wiux54m7wvdnr3l7sf9r7vstjtc6q6m68obm70fleh.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.17.18-xh9ckur9p3pw7piavk9jf2h58shk1go33b6p9jonx6pa93sdpicwe57tk3dfw2r8.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.18.22-un65qjzuwe41q2rsw6n351aleusutvep6ntsad4cb4f7ig6jr9aaaqomqloe1ptm.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.19.25-8fzyj6q0mmqxbfcwf0sgtg7sh4ij3ctqoy3uexnxjelmezxt8ztz9tfhci384rau.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.20.29-ikm6ucb32m4s42kq66cu7na24qb0iicmr3wjg02wuj7qmpgnovtu8p7wvo9i7bk8.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.21.33-keryd2kc68yqwckmszb4mew6anjbbbktt5etzc2ezm47yee4xuiok92os1hqvk35.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.22.36-qj6513qrc5swx6k229k53550u0abgflubibvxem4cy2ca2h9tmc868755yqmhgs9.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.23.40-ejildt95pnxrvsgvlko26gtfhnnoyiecfidffkjajp2zwyhnw3tw4c73y8uqe81y.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.24.43-7548sfu0gw4i56z832um79e76u6woudu97837brmhfmpnp6470axd3bce01g7udd.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.25.47-jri8p2gy5mspjalirxgz2ji3jqdopy19rnvc5fpqkyhatll3jh3y6a38h8pfv3e6.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.26.50-a04rkaaieeqguyy842k325g5wuhhlg9s7skzd7qr4vwkljm8rkn4z1ts6gd33lbd.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.27.54-cfp1yvfabczao4l1incs9hgyf548ihgbblzokg3o4id78jb2nufw1w79grmiake9.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.28.58-zeo6ujwif11czycvaabnhyl8lxnkvi25dxcqe8kffximiwuowm9kg91yq31y1hm2.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.30.02-a6188mlrqpp5q318j76ez0201l1amm19r2xwhyf3ce3n1m5mxrr3nmus10lned8v.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.31.05-f842k8ct2w3j6ndchxv2ltap4753emu7y1gv73c5mj6ryswhmv391phmpfgq1zj8.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.32.09-9y9x0opsv64qtnkab2apcfv18tu95xs5nnayeb24v2u2z3kpth0x6891wu4glucg.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.33.12-tgxnmirvtxhtw9jtk5qy9rp4eoelqbt5u2ewxzmz6fnu1mxzt7s3xd56r8z1az4n.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.34.16-4q3qt0o1sm82jyhbmeqgnx98i8mpicty1l57k78374d9rm7y6tldtezlh5aobq1x.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.35.20-f4izf2mt0kodxp6xlecxw2h7c8trhjxrapzfqjt49zx93id1c7canladksxghuej.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.36.23-tdrh2ryauzaeqwco399184nn5kc3axemtboe6vke47rsld2i6r81p077po7dxuyk.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.37.27-ncwxhvkv5s8asz7k221cougfq1gxk6d80oa6e0mo86qianb5jrcqh9hpkv794q92.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.38.31-hoxeltms44e3t3s8p9n1sk8zuppuyosbnh69d5009wr5ct01td80mtrusuhheise.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.39.35-v1m7z4v1sszd0i6202wu8ep0pr0xre8jmf0qj6qphwbx8r29wd791lvvy11w67i5.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.40.38-y5iu4ly7dq2wol19pvlzqztonybodi4kfk0pmil52r37dixozzsl3ir64fobreds.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.41.42-e0vvswz26gt2x1229oqgha245njvp45ef44s4prmkapc3ke4wfbjeta3t6rzby9f.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.42.46-mp520rngm3hii4ho9th2anbu9p7dfsya4czae6o66asayrh26hux3h383rf0gwuk.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.43.49-grk9wy6riuh6eg7uzm9sdyb3b902dvg4hput2csdw4x5rcbbp2fp7jjmkgoaols8.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.44.53-gfhf2ea3pgrohy1r4z8wly058bxro6wlqrn75cmrqk2zff73l9ciep3qqhsfixy8.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.45.57-8jfgtjg6hsiannyth569wpqmjhqcz1x9oekrop8l9blnrvee6h1n9jrc14ernjfh.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.47.00-z622ja0t5280tehsderi1dp510h9amfkmqcybtb42okk2bfgcum1wit8fl7i4uth.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.48.05-8zcz8ghyto6m4h19x882lnzs8bbzmdj5lse0vfp3qeas371cktzkw6hqwl9s17lu.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.49.08-qh4cxwhs8k7dgontpn3ygk1m59xukynff7zfzltt0ukypqipnowhju9o3egml6bl.png',
      lastModified: '2022-02-23T21:34:37.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.50.12-pre9tjneo0fn6ftlqz74ri9twkuxt7o6zu3ls1ba9b4anol0i530786vly763z0i.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.51.15-nf3xuh8sofzjpc5tkayllfco4gl2uoytydx8wstqwsc5li0c6jlswqk10ljwvm4r.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.52.19-hct8ekl69yvjstuwe191z7up1liobg2twsafk6a5ff2ssrlvhodi5x7ied4rnsz1.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.53.23-8cxsr6cayint54ziqvxwvji69u45vc5eb7gsueudyubaoyl3662u2xb70fjfwsvj.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.54.27-4u4gutlps8zcto7xlw6shghlq8tincq3oof1pl59f55ter1lfig2g2v0yw89dm91.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.55.31-rkb7hnp90kgh1ri3unoc589gcbk8k4zugdq2qci3pb080q2aaa2yoveq2r7p22kt.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.56.35-lq9g9c8ocr42l0r30l2x3a5u6y2yn7xz9yxwlmpkowtmub9aniipw16nb6k4vjp5.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.57.38-33ap227vcxno8v5wobt10q45at10d5uoehgbzyizwlzeozcizyouby9gn91sovuy.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.58.42-nkptfw8am4uhaq9fpk5n9mxh2mfbex9se6n3wjtelvwf2fopi5t5vvg56ne3mlhq.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-11.59.45-7hhx00qi3s0wk4bmin3zlem0tt5jyzjra62mclatkj5q1hek30l2b1f39l3ofqmo.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.00.49-vr0463zy419ykfn1rm3hm1pfpef7fs17hhna35cxppg54zmr52twkkygul693j5b.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.01.53-ht3txq5p84j4v4dkzycmgj76j25tuyp0vujywn7gjmoerxiz7nclr5ipr37lwv9u.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.02.56-zeowiqxo888zoh3u8dwjpuahlkl8cngygusgb5nwoddnmwd7ubj61wmuk31yhbvz.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.04.00-iy8813lrg9f996h8bd130ih0lzutzpu50rjda21zp0o9efrsnf87ot61nha4gy0q.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.05.04-ab58n0pgozbvsn4cb7kegd63fx2gm7a8xrnwtg2whnru7qfdgalonic94t9s1ga0.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.06.08-8cgsx28mfdtivnu5m1v0zkun8pjymovdwb7jgcburi1q16os0t8eq84vr95i8m9m.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.07.12-krd6z03jnvtcnw8um6ovv5k4g8vp4sbh3uz4jxqe9ckogtojmeulb9gf0e97np9e.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.08.15-r07ugdj6xytkg96g16i70vfqmdfi12e5e7v9vsn11adnndob0zk4owexupklmx9h.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.09.19-yxsnj7qr26ch9uvkp22h1y18q6ewwc93xw4ctg5qaw00f8iaeodls8r0xy2uiqyg.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.10.22-5h966odl4dec52u6cwf2xx1560kdf09bykof4iyqbnbu1zaa5a0v827x14ux03c9.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.11.26-ctsc11ytr7vln7oz0qqns2ltp31regu1yuw4si9mufgntgn3qrjha0ozuvno96al.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.12.29-vbk7n8f9te52vobklfcgdqnlyn2xqlt0d8yuth1dj73s6i0zs3p1srbartx51kfj.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.13.33-i1247gf3zggcqqcuclf4r43le7x5ugw1rfbm5wrklchzmewtwztsc9ilavuq89ml.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.14.37-ipgmh1s4mx4kssq65sza74z3tfcxg9lir1pfcw5u7f7f9lrc1zvp4x2l1q8vaat8.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.15.40-vljbcoam4uhpc0jrdp1i4szlck62wqc1hk5qk44xdoh73r0vujrm50wk07xv94am.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.16.44-pg6ybj2nw2kr4ijudvd74zder9rmc51ltycgdwuf17k9bnwyde9dhsrn4od7vzyd.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.17.48-bgmamscsgw3rv54wjkxknahnc0ssf5kp8zftqtxd2byml1lbyl8xys8ztjeqcezk.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.18.51-e0ay3cujpc0bb3urfzebgdktpxjbggamc8zusybgizha17hwol5x2royv4lnhket.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.19.55-0jfsn56ymqtnshz92zq40e0v5m8l51e4goe8s3x6z29rwl175e03nyiwbkhtm0v6.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.20.58-zp608y9d56hvuzvt0tvo59ckci1220u3ktp73wmsaapg0yry6f4n7iq2xpch8aq8.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.22.02-kl71hvuio7ccv431x0c5grptpelkvcvbyjt9svd71n6hg8qpj74rxzwa5tc9qlfv.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.23.06-8pdfy4abwzh9z2kh2emiwcl67bwdqjs2lz2qx5phjxg3ahv3vn8kk08q24prwzfo.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.24.09-sssn1b43vurup8n16g0q8r804ta8ayi185h5j46g5wejxgn5hv6m8qgbxxmy5g1f.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.25.13-sm6gp0ufpn3foogsbpiuxw3jmgl0dg20kdzdk4liegzcwhm3w21r6xu2b58yonhc.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.26.17-hf3tshirprxtxhteq6fepaiv4n10jkcnrt4r42zj9cfmi25e8g06n42r7e6zr3n2.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.27.20-gwdtjndhr6idxfmp1crms7kywvd81bk678vdmpy059rjnh97xf73rd0dmrjqkqj8.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.28.24-0uio6dwkwe9lp166wbyzurf0mobzdreggpu7k6kd23ddner8847xw8qs17ufapmc.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.29.28-dw554uwj0rby9memcuzg1gc408fwcmv3ck1xvr9ljq7mime5ayzdd3ps7zy7wxpc.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.30.31-u9xr0zta5mjmcqgigcflbs8mm6i4d6mt3bbqo7uxix9ibik5ln14rbn8obqa8mjr.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.31.35-o3ukjsavfp72c4175ujd2a5eaeyezq20z9n8tdrv9jtrv3unpyt5euxi1pcqg85r.png',
      lastModified: '2022-02-23T21:34:38.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.32.38-cyehvbvexxomkljphp3l2p12q992wbfjpp2hvnj81e30vz9y1ngo235u2p5k4c0p.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.33.42-chtph4vyiqii60u6t34niyauas72q66bjempi1m9fnm919gtggrnwucqcd45vtwu.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.34.46-ci2jznmfovzj7w3gi1bha716ckt0fuqadtpj0ysv55zf6mb2vfipv4uk4tlnnpgy.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.35.49-req65zirybmb8pyl4yaknprnz1foyctbtswg6fr17gjzdnhcqf92lpo66w25iksj.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.36.53-v5qq0idp05t3kddw88f4fo9c04bwd3fwddz7xq9v342ikxi72zwmezaxmn3ka7tj.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.37.57-u7zkkcczx7uya9i9ohh35kaiungcdlh3fp0coz7w1ia5hjlx2ag7fdqb35k96pr3.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.39.00-w04lfbtq542mx07exhcsdsdexgeikxo3pb0996m1g72jycjipq4qb3qupj49sxu0.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.40.04-ifgp2xdkl23c72cdh5eouo27ymab4pf5lit3xy931rhgm2daw4rk68j1iyv2mf9x.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.41.08-awm95k3uqcsakduv2ldvi3pnvvbx2w0ki0icu5jz0917kkziespdo8frxoa8ko4v.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.42.11-nqka49ofqxkh01pex1ljivehsiph3o6ppokvam136ju7g7m2gowfhsdcue1i4ydy.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.43.15-qu5dyb0y05zpi78c3u1lz441t8n65mm3lcb4zutvun8e0005s3w4e1miftt8pmcf.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.44.19-mkiumjpul2s0e35n30riv21yf51lpdf5xnqui7be50guk0mf22a8r96lmw4r0ivx.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.45.22-6q5rw9s3x2ojhuasuzdgy8ftgnmwdbsuf3ritg18vapcdphxeco9y21u1f5hrwdb.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.46.26-kmj7vliye3i1odmchohyfjkf7f42xxkios115rmlbuom9wbfnnf7nhg64vzh59ew.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.47.30-o7f1myviao069z6pp3nm2iyhn8uibb9qos2lexd66frcbrza2u82qftp6jj50783.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.48.33-i2ldb3ew8wkb9fcxsvaxfvpwdswgruyv3p8rdb5udrb8to2vgrmwu0dtu3f0vmm2.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.49.38-spkoy57g8lvxtn6u295ixe06dekh77qn6v2q4zpwm3097cvfnd86tq03w8kda9qa.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.50.41-jxgz5o0o1uxjsecwr924jqmcn8opjs1hf2pkqvmwqs9wmwhsxl3x13cp8837c2nq.png',
      lastModified: '2022-02-23T21:34:39.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.51.44-pcxjbawdp1lifitro4n7d53ovfvxo2g0m9dxljfjhn1p9ervav5adn7wosxpjy12.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.52.48-zos423o1u3hb2k3e1lpr08l9os2u8y9by5llb8qyslskembgo6am2bree7xmw2ym.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.53.52-0knk0fl9ys9sk1xrohpmy5tacymufq0na3fve114p4k0b4mngecnzb6qbxe0i5o0.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.54.55-8gmn7zrddj6ne7i0w0ufzxzdrt962d8hqma42l4x1bdj6lcgkqklq7mgx14p03dk.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.55.59-3jgwipql892s7qi9kq6adoawf8484al7hrmaoyjijix7avfr8hbt6znqxk5njt31.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.57.03-yilrineex792ziueb3wb8bx6nu1qiu6v6soxopj994l0508auxe2x47t6xpntpfz.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.58.06-ltnptxt6g2nlc37pok618m9l9kt7u04zv9q0wbhlw291tuvr03qzeyzzlg5h1vxx.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-12.59.10-ebn4zto59hsml2m0eks9564q4dybdg2oopg93x9sy5sajrr1fy8xm48pawg4nqzw.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.00.13-kx7flail2yzrk24c17sbeiqe3mvnkfzvnb4x9h3flu6bnfykxaz8pla1tmajvh9i.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.01.17-4vgt9t8bgpwi5uko6sn8gy9fmxo1if624obqpfzvve9bpk859nzxmqa5wscuxfor.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.02.20-pol87sm1832x7zxu0197ol6uh7yfz0kui2h1wnvi1tf3h2u5yf3ft4fwudpvbyuf.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.03.24-w50ohwacfm7utrfnnzcbnspcvlj4b63ondr0ph2s0nzp06pajlagp0wwgemvig65.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.04.28-0d9yt1pfqzjr9vuaycyqecqlpq6qnifig16laduuerpp3jnwm175c9qs4cvfzxt9.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.05.31-598sx8c1iv8hirvnz5o6uhhj3zuxt294iql3g5rb0rskhzma8h2d390zjbwn2pqb.png',
      lastModified: '2022-02-23T21:34:41.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.06.41-f1rjeqcq2ljz1kanmods7uz4gies670p8fi113x4mta9lveb9f0ue96punuap50j.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.07.44-nae23fxjoz903n3uy1r22d8gotlvpk05t0ersdmhctri9sl2m4uku4mrx3gjp8wh.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.08.48-axl1corz1nee4uqv2kev4w9n3kvk9l91zft0cp886gwz4mn173yp2h43be7qgomu.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.09.52-t5n304u8utgxdc7oxjq615jaj29l4oj8a9nf1zdza5hq4lf5ty6s6bg4oknqjtme.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-13.10.55-uqjrwukbe3pdx3cjm4nmpov1pmtfjqz36dik55e35e22taq5mwvjhoi2wu8jg14j.png',
      lastModified: '2022-02-23T21:34:40.000Z',
    },
  ]);
};
