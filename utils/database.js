import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

let pool;

export async function connect() {
  let cString =
    "mysql://" +
    process.env.MYSQL_USER +
    ":" +
    process.env.MYSQL_PASSWORD +
    "@" +
    process.env.MYSQL_HOST +
    ":" +
    process.env.MYSQL_PORT +
    "/" +
    process.env.MYSQL_DATABASE;

  pool = mysql
    .createPool(
      cString //digital ocean server
      //   {
      //     host: process.env.MYSQL_HOST,
      //     user: process.env.MYSQL_USER,
      //     password: process.env.MYSQL_PASSWORD,
      //     database: process.env.MYSQL_DATABASE,
      //   }
    )
    .promise();
}

export async function getAllProjects() {
  // const [rows] = await pool.query(`SELECT * FROM projects`);
  // console.log(rows);
  const rows = [
    {
      id: 1,
      project_name: 'Gradient Blobject',
      img_url: 'https://ipfs.io/ipfs/bafkreigvvsh6gnllxn3aa24fq6rec2mfa4jjcjkmnfr2jhhu4eaigfvxcm',
      project_description: 'A simple sphere, manipulated with GLSL. Built in React-Three-Fiber',
      quantity: 13,
      price_eth: '0.01',
      open_date_gmt: '2024-02-02T03:00:00.000Z',
      royalty_percent: '5.00',
      active: 1,
      contractAddress: '0x91a9F33D6714f70F58d2c5d362746b7c5CeE2eaF',
      summaryData: '{"project": "Gradient Blobject","elements":[{"images": [{"token": "1", "ipfs": "https://ipfs.io/ipfs/bafkreigvvsh6gnllxn3aa24fq6rec2mfa4jjcjkmnfr2jhhu4eaigfvxcm"},{"token": "2", "ipfs": "https://ipfs.io/ipfs/bafkreiepbv5iywthwyluudjp36pm6uv4k5xwkj4x2fq2zqbvenab66ye7m"},{"token": "3", "ipfs": "https://ipfs.io/ipfs/bafkreiht3csbhikh75xjz5xm6sg5ldo2tpg6lqnyjd2fh3efxt3m2styvm"},{"token": "4", "ipfs": "https://ipfs.io/ipfs/bafkreibbkn2sucjh7bdqgq5tbt6bge6t2k4njtsm53hzfpr3qf7xnjtlkm"},{"token": "5", "ipfs": "https://ipfs.io/ipfs/bafkreietzswtnep3wxoplddoeym34eht7gurcrabna3wss2dmridnwheby"},{"token": "6", "ipfs": "https://ipfs.io/ipfs/bafkreia4xcytpbrua4y6coxxqozpyjkt42faiiqmmba2g5kx7psivawr7m"},{"token": "7", "ipfs": "https://ipfs.io/ipfs/bafkreibvhcaz6u4egtgrasictli2n7m2pyh2er7ecfjazanbzsfr2eumli"},{"token": "8", "ipfs": "https://ipfs.io/ipfs/bafkreibjkhahzevehdnhmeuhyonk5jblqp5ckle3tqf5jz7ert6adi3ify"},{"token": "9", "ipfs": "https://ipfs.io/ipfs/bafkreicqgca4hj3h463yp7qdaylfzwzbbywxnnmvnugxbkwu7p6x55hnoi"},{"token": "10", "ipfs": "https://ipfs.io/ipfs/bafkreievnvsq6ct2lrfptu24loa66od6k7dkccpqij2lsmrx2furu3kqii"},{"token": "11", "ipfs": "https://ipfs.io/ipfs/bafkreiebvfbd7jdw5wsf2y27xn54wbdouyrio2jv2gepgrzwqkp6avm7lq"},{"token": "12", "ipfs": "https://ipfs.io/ipfs/bafkreibzf3v2gd2hw6skp6os6ed7gladmb4zsg6xfm232echlo4jyddcr4"},{"token": "13", "ipfs": "https://ipfs.io/ipfs/bafkreiepil7ahh7w3r4inn42lnvcz53r6m4nx7elt4frd43usur7xva6g4"}]},{"anims": [{"token": "1", "ipfs": "https://ipfs.io/ipfs/bafybeih3pulyekmlmyi7crwe7uq4ll5bu2zxndngklwohbnpsmnut6jxci"},{"token": "2", "ipfs": "https://ipfs.io/ipfs/bafybeifppvnwd6aoovxb5uaktmwzbotwv3pyrg3bqeukufztc2os524qcu"},{"token": "3", "ipfs": "https://ipfs.io/ipfs/bafybeidatvpsovjvsvhf6zbqchajwdqwu5wzy5bpxex3k6a7yy2mjvvybu"},{"token": "4", "ipfs": "https://ipfs.io/ipfs/bafybeihs54kgtdvx7px6ztfa5qqwtt2ij34kzbubotmihxnk6jipxzqazq"},{"token": "5", "ipfs": "https://ipfs.io/ipfs/bafybeiht3jha5alcbdzjpjmcwrxvsmz5ez2vttumwi56aljb5xgyis2k5y"},{"token": "6", "ipfs": "https://ipfs.io/ipfs/bafybeie7pxjqczlurcsoapc26thkkefwm3555gb5m4lvgelybsk3reolfy"},{"token": "7", "ipfs": "https://ipfs.io/ipfs/bafybeigr43hpsvuyi7poduuzd4wc76rumyehrx7jbrlt45a3b7hipqr3ei"},{"token": "8", "ipfs": "https://ipfs.io/ipfs/bafybeifl5mry2t26wlmzgqu2ox4tnxcyv6pzzlj3h3ppw54ztd2a4abpqq"},{"token": "9", "ipfs": "https://ipfs.io/ipfs/bafybeihaa7qeemolosuu4hamamj2egyfhvdmqrta3rjqh6h77tfkxotrue"},{"token": "10", "ipfs": "https://ipfs.io/ipfs/bafybeia5fznpmiv7xbqaizsbzmrxuh5bhpr6gy5cnjkkzr7e2u36xwc2ie"},{"token": "11", "ipfs": "https://ipfs.io/ipfs/bafybeig5f7vfiz3a5kmmudehvv4uty3glcpy3aj3csvegipgivqq5regbm"},{"token": "12", "ipfs": "https://ipfs.io/ipfs/bafybeic2ti46cbwhlb4wmr52mank2exbqjoqmhahmau57bj3imigvxmzba"},{"token": "13", "ipfs": "https://ipfs.io/ipfs/bafybeiaq6nfanx5xerkzqvocrlvazc2wwanpsb6qqjobbgjn4xlac7fx2m"}]},{"metas":[{"token":"1","ipfs":"https://ipfs.io/ipfs/bafkreifsr3coyuwwnqcg7ba76ipw4iig56gye7a2vgeprbuwnecf6vreqq"},{"token":"2","ipfs":"https://ipfs.io/ipfs/bafkreiegll6ef22msyhm5df55qi4caim27tj4czaujcnv5f2yhdomfrzsu"},{"token":"3","ipfs":"https://ipfs.io/ipfs/bafkreie3m3jhnrxv4kwgtnrpgoswdw4zkvtybpbn5v7nqo7zyyqaj6r3k4"},{"token":"4","ipfs":"https://ipfs.io/ipfs/bafkreicowpbvyjq7frprdusaxzxr6ekdtnsuzjcydw5jlmuptwknjnxema"},{"token":"5","ipfs":"https://ipfs.io/ipfs/bafkreib7uobmesdazdzkmlpyzagywip3qd3huazu3rwgkfskwl5ts5dixe"},{"token":"6","ipfs":"https://ipfs.io/ipfs/bafkreiffcilner45bxwo7zdmbcfl7vunnrkcnkra36j57jnj6sgij6iywy"},{"token":"7","ipfs":"https://ipfs.io/ipfs/bafkreihdbqz4olgmrt7tomtflnichwpx3sm4vc72izlawnzmiph2yfcdvq"},{"token":"8","ipfs":"https://ipfs.io/ipfs/bafkreieat57igajotyenur6rke6di2ycr5vuhsssvfnvgvvb2mam3abrly"},{"token":"9","ipfs":"https://ipfs.io/ipfs/bafkreiaasvhyeg3woox5sshhvqokdzcggmsifkjrky5q7n73hzcjmqfkxm"},{"token":"10","ipfs":"https://ipfs.io/ipfs/bafkreihh3wzcbcde6ons5ibmu2p7j233nz3lhpx2cpsh244eyfrjd3yyp4"},{"token":"11","ipfs":"https://ipfs.io/ipfs/bafkreidqtnlh6puk5wupwmgukl5zzatylp5qkkvo4c2dzu3llbxkhvuiv4"},{"token":"12","ipfs":"https://ipfs.io/ipfs/bafkreif3gnnf6wcnl7nmmhkfkhu53ragih7esst4gjgxdsfa5c523rv4em"},{"token":"13","ipfs":"https://ipfs.io/ipfs/bafkreiaz5jetoyvcbgjnx274q2sy5zo7wxxj35yptgqhiptfbwtqa6gzz4"}]},{"project-image": "https://ipfs.io/ipfs/bafkreigvvsh6gnllxn3aa24fq6rec2mfa4jjcjkmnfr2jhhu4eaigfvxcm","project-meta": "https://ipfs.io/ipfs/bafkreieouovabd5asbfvhui5grmjxirxn24gvophem2hujlgxn2km2rsly"}]}'
    },
    {
      id: 2,
      project_name: 'Square Dance',
      img_url: 'https://ipfs.io/ipfs/bafkreidhc6kdojsvbpvnpr2obfe3y7uhbpnz56uyhrx4aqywpjazocj2kq',
      project_description: 'A noisy p5 sketch. ',
      quantity: 13,
      price_eth: '0.01',
      open_date_gmt: '2024-02-02T03:00:00.000Z',
      royalty_percent: '5.00',
      active: 1,
      contractAddress: '0x575529a605e05A690c7Da6ad907AC5646B87D01F',
      summaryData: '{"project": "Square Dance","elements":[{"images": [{"token": "1", "ipfs": "https://ipfs.io/ipfs/bafkreidhc6kdojsvbpvnpr2obfe3y7uhbpnz56uyhrx4aqywpjazocj2kq"},{"token": "2", "ipfs": "https://ipfs.io/ipfs/bafybeib4cepi4fgnhqwx7lyi7yvlsbcavtibndhtp5kbvxhn66bdoxh76y"},{"token": "3", "ipfs": "https://ipfs.io/ipfs/bafkreiawm5fmfpwiaijatlnmipye3ind7tkyyykn57kgojx5rlfc4whura"},{"token": "4", "ipfs": "https://ipfs.io/ipfs/bafkreighqlaascl25y5nbtv3r2y4mmgkvo2qtan54ujltjgfducxymhk5y"},{"token": "5", "ipfs": "https://ipfs.io/ipfs/bafkreialb5ecrldvtglogiwgwvbry2lde4qjeou7lk7viytphjk5no2h6m"},{"token": "6", "ipfs": "https://ipfs.io/ipfs/bafkreihctqzg3ymqen5p327uwqskkw7kft5xfvnba7yu35o2bmaavz3lii"},{"token": "7", "ipfs": "https://ipfs.io/ipfs/bafybeie3d5q5fief5putyi77zlt6enm5gztrjlcm2or6xiauythzjz4bmu"},{"token": "8", "ipfs": "https://ipfs.io/ipfs/bafkreienhzq3wd7tqzcxawiol7evpu3uubgr33vf4qjzzanw5an6z6j6jy"},{"token": "9", "ipfs": "https://ipfs.io/ipfs/bafkreicqdzkbx6n4zyrmmoezpjr3eklpgrvceqznq25rlmgniw3cmj5jrm"},{"token": "10", "ipfs": "https://ipfs.io/ipfs/bafkreibiuw5yespopowawugfpr3qvjr4pkb7odeyx3kxuvo32nfltm5nxq"},{"token": "11", "ipfs": "https://ipfs.io/ipfs/bafkreigocoiptudv3afkmd7r7rluzcudxmgoqgsuf4lam35csvmnxlypim"},{"token": "12", "ipfs": "https://ipfs.io/ipfs/bafkreiedt32argocoz5kmtu4bx7efqrve3ylzxvpvsv3ufxoxjbophpdwq"},{"token": "13", "ipfs": "https://ipfs.io/ipfs/bafkreif3eaczut2o3if3uumrxkutbecyeto34ygcgz4zdfqeppuynk7mia"}]},{"anims": [{"token": "1", "ipfs": "https://ipfs.io/ipfs/bafybeianildm2ojihgx5cpkf7toowrjx7ksb74uqemxzlfzdmykx7kl3de"},{"token": "2", "ipfs": "https://ipfs.io/ipfs/bafybeicvfp5dsswuhwyxrlr7hhmwjdgrsqt6nj4scp7rifalbdr57jq56u"},{"token": "3", "ipfs": "https://ipfs.io/ipfs/bafybeie2qweizeqtxpxrpnp5kj7zgj3zmpxjvn7dunfsvast4lx7d6di3m"},{"token": "4", "ipfs": "https://ipfs.io/ipfs/bafybeif4t2liupl4qwx32ocwnpd3zgn2ml3bs4lw63xwpcmhbipyc53bw4"},{"token": "5", "ipfs": "https://ipfs.io/ipfs/bafybeihdhb2n7hhl5uqwp6vpjrxpa57t2uniti4rk4biuej4sjoyonmhfm"},{"token": "6", "ipfs": "https://ipfs.io/ipfs/bafybeicbjwla6io7m652rw3j37rl6liwsq4q5k7ahcioqefc7edx3wisle"},{"token": "7", "ipfs": "https://ipfs.io/ipfs/bafybeie4yqitxgsbvear3s44ap7ksiq3vd7hqdvwbdni4af6wkcti3cjca"},{"token": "8", "ipfs": "https://ipfs.io/ipfs/bafybeic7sqvxwjpak5ks5yv4gdzj6monm7erp2jnxybdf5ozezcqxcib7q"},{"token": "9", "ipfs": "https://ipfs.io/ipfs/bafybeie3eqbre6j2jrffwviqdtwioc37ntp6wdrsfhanh466egvach5h6e"},{"token": "10", "ipfs": "https://ipfs.io/ipfs/bafybeieigrhehay4lu3vm7khpotjtpd6xhbai6wz7gy25jsdli74smfzla"},{"token": "11", "ipfs": "https://ipfs.io/ipfs/bafybeidoigw7tqsqpvu4gojwetdivratapqoavojfwlwcytr5b3ppo3aby"},{"token": "12", "ipfs": "https://ipfs.io/ipfs/bafybeihxcmnvaofcnf5qsgh3nsrskvh2ycndhv4nzdcltx67fzia4dsoyq"},{"token": "13", "ipfs": "https://ipfs.io/ipfs/bafybeiemd3f7odso5kmfj4pvqx77kg5iukmhqfnex5dwcppw2ieygutzuu"}]},{"metas":[{"token":"1","ipfs":"https://ipfs.io/ipfs/bafkreicf5tljfrrcmxzvdvtg522ocjrxrlzd7cvjmckn7gnmkyi4wkkxea"},{"token":"2","ipfs":"https://ipfs.io/ipfs/bafkreicpemiu3e4optv3hk4acxhwiv3mlv2fpgh3vk3yyadm6a747zr76e"},{"token":"3","ipfs":"https://ipfs.io/ipfs/bafkreiczu75z2b67732tibihrfzrsvohycfdmq6yxrzr3t4frmdjrwobgi"},{"token":"4","ipfs":"https://ipfs.io/ipfs/bafkreiexd4bm2pizg7555vapmpxuqliwpfkjezidlc7utsj3lb7cpftlc4"},{"token":"5","ipfs":"https://ipfs.io/ipfs/bafkreifczj74ikfscgy55xktk2werm4txl6nwe3ceyoedlmuvirdfh5n3i"},{"token":"6","ipfs":"https://ipfs.io/ipfs/bafkreibrygafxf2gzlqgdoqed5ntzkh73qjddynm6grjnmqtovcjjqi2l4"},{"token":"7","ipfs":"https://ipfs.io/ipfs/bafkreifyb7rtnkg5ogm264clfrp2sb2evidil3kb3xihtl7loo4blgx7se"},{"token":"8","ipfs":"https://ipfs.io/ipfs/bafkreidsd7xy6df535hxicmcos4n6gm57gwumeyohhbkrn3kgodlqq76eu"},{"token":"9","ipfs":"https://ipfs.io/ipfs/bafkreiabjol6egmuebors72vuenea64evvyqa35amzryjjuoldis2lp7d4"},{"token":"10","ipfs":"https://ipfs.io/ipfs/bafkreidqm22omfjyyzboo2nomacs3twilnccm4efnxnh7poyrms7akob6i"},{"token":"11","ipfs":"https://ipfs.io/ipfs/bafkreiexewctaihq36j7ftt7wks6wmh5s53vwdmgf6jr274jwit7p3p6zm"},{"token":"12","ipfs":"https://ipfs.io/ipfs/bafkreihqqxozzir3lxkvvtmtmb5cbrktqkcpovikrels4ipm2xdonryep4"},{"token":"13","ipfs":"https://ipfs.io/ipfs/bafkreiccxog6vtzvfdvmrpf3lpucvyfmuozjek5kp2zr66haqct4smamty"}]},{"project-image": "https://ipfs.io/ipfs/bafkreidhc6kdojsvbpvnpr2obfe3y7uhbpnz56uyhrx4aqywpjazocj2kq","project-meta": "https://ipfs.io/ipfs/bafkreiffqacont4gh4xmcmwttqqjlsgn24ttb6tfkvkuzhhxg44ppz2jze"}]}'
    },
    {
      id: 3,
      project_name: 'Plane to see.',
      img_url: 'https://ipfs.io/ipfs/bafkreiap2nae5ph652yzaqwm4y4qtxqdg7sgkqmxdl2gvvkv7fcjbu2w24',
      project_description: 'Planes. Colors. Movement. Made in Three.js.',
      quantity: 13,
      price_eth: '0.01',
      open_date_gmt: '2024-02-02T03:00:00.000Z',
      royalty_percent: '5.00',
      active: 0,
      contractAddress: '0x917724467fBCb4EF3f55666f4E31A580FD2286e4',
      summaryData: '{"project": "Plane to see.","elements":[{"images": [{"token": "1", "ipfs": "https://ipfs.io/ipfs/bafkreiap2nae5ph652yzaqwm4y4qtxqdg7sgkqmxdl2gvvkv7fcjbu2w24"},{"token": "2", "ipfs": "https://ipfs.io/ipfs/bafkreiev526quhj2v7aczfrun553jmjtya6tilkkhmcjr5q52gcatvcz6q"},{"token": "3", "ipfs": "https://ipfs.io/ipfs/bafkreih45a7drseh534jvjllkx6ncageotpiejbnblc4njoqqnofha2kka"},{"token": "4", "ipfs": "https://ipfs.io/ipfs/bafkreifhn637uenvcfxjrftn5uixl7jzdn3hgxsakcgefqab7zkqk7wmem"},{"token": "5", "ipfs": "https://ipfs.io/ipfs/bafkreieoqddkmgsv3u6tzsssfeanm2x24s3adg673qijicsqwckhuxssiy"},{"token": "6", "ipfs": "https://ipfs.io/ipfs/bafkreibs2z2c5rdsnvidydy4hxiirqasa74flq5alnzwx2gzecbuix6mgy"},{"token": "7", "ipfs": "https://ipfs.io/ipfs/bafkreielqm7ojhzipdjgkozv7dbuszfgodtmnu7mcklyccwihkumyd3fti"},{"token": "8", "ipfs": "https://ipfs.io/ipfs/bafkreih36i2dvgjadqx5r2oconhfsqmyfob4vxyykeml6vtgs7x2qqb4xq"},{"token": "9", "ipfs": "https://ipfs.io/ipfs/bafkreihtsi4ankcr7kzmiagon6i2zpvhighq366eo25vm24znbzokszj2m"},{"token": "10", "ipfs": "https://ipfs.io/ipfs/bafkreifia5w4qxm2bdhhmgff53ghkpayuexsjbwndwtswqw2rivpcaibmy"},{"token": "11", "ipfs": "https://ipfs.io/ipfs/bafkreia5v5x3uchvxohhwbbsj7umietu4ydti3ls6yuscemon42bloqjfa"},{"token": "12", "ipfs": "https://ipfs.io/ipfs/bafkreihrr4ifbni3hkkk3ri2ouafmomkbwm7dbgwe3ow6w36wnbuddqqyi"},{"token": "13", "ipfs": "https://ipfs.io/ipfs/bafkreiatgr53i3rxmd7v2pvoz3kncob2mzbfrtjjcoz2qobjonqlyolk3a"}]},{"anims": [{"token": "1", "ipfs": "https://ipfs.io/ipfs/bafybeigoeg2kisavpvoqtwpqjfuvhfojbuvucnbclwozkgrfr6jwcu5ndm"},{"token": "2", "ipfs": "https://ipfs.io/ipfs/bafybeifpkjw4bvgsjclc3p524audr4e3cebesvhst364or4gwwz2bptroq"},{"token": "3", "ipfs": "https://ipfs.io/ipfs/bafybeiguwgzxqassgilxeqd5bbx7jgwraebppx2iq5sqs3kclqjny3n5uq"},{"token": "4", "ipfs": "https://ipfs.io/ipfs/bafybeigts7yhkqpchzbcxqnyklpwwm6h4jdaac6ger2zvvpaqyihvx6kcm"},{"token": "5", "ipfs": "https://ipfs.io/ipfs/bafybeidrzns2cxjz7nayi2trstdvcfeawnzgqrkvvdef477zxc6knav23q"},{"token": "6", "ipfs": "https://ipfs.io/ipfs/bafybeiheywnkmbjbhsdig4zk6kmqmdfmh52fmnhxkiinruu2oh7k66uive"},{"token": "7", "ipfs": "https://ipfs.io/ipfs/bafybeihk7t4nrlammkjnbjo3borhakun7iuqqejmyaogsdb5d4ilti5hyu"},{"token": "8", "ipfs": "https://ipfs.io/ipfs/bafybeihtli6vaachqp7ou6x7el5y2lb2hmyq6vfql4u5vd5hmwhnkx4gvi"},{"token": "9", "ipfs": "https://ipfs.io/ipfs/bafybeihlf6vvqwrgd2o2ceka4bggztpgbc4ieh4lxp6o5vm5hyc46rte3i"},{"token": "10", "ipfs": "https://ipfs.io/ipfs/bafybeihdbivy5dmi5xkuwwiszsemmsion5ypcvebyw4w6kzoh43vr3x5mi"},{"token": "11", "ipfs": "https://ipfs.io/ipfs/bafybeihjxvfcntcxyqedl5aiqk5sri57zhjpmyevhgauecdrrcnxbfirxi"},{"token": "12", "ipfs": "https://ipfs.io/ipfs/bafybeignpprsjcg4unlqt2xkzi3jf4zjomtuk6f7lhth6yrfh24ne7jsiq"},{"token": "13", "ipfs": "https://ipfs.io/ipfs/bafybeigachp3fzpxntyjelrp6ri6t5o6b6z6rtq3llpitnpzouhlpbltyi"}]},{"metas":[{"token":"1","ipfs":"https://ipfs.io/ipfs/bafkreigvzfgi5fjtukktww2jf43ukgjiptzhanpsyurd4wne7ouxfxdr24"},{"token":"2","ipfs":"https://ipfs.io/ipfs/bafkreigfoyidnul62vdowukjadgqcpjg62mymbgwuvkffyfzeqrzh765lu"},{"token":"3","ipfs":"https://ipfs.io/ipfs/bafkreieyy6fhlkwvply3fyjpl4rc2qubr6uwvc5lavxlcwa2pwcrlp3she"},{"token":"4","ipfs":"https://ipfs.io/ipfs/bafkreiegvonq5zza7hfr5bowrnoubd4x7yezalbjq2lk3e225vsm7d4awm"},{"token":"5","ipfs":"https://ipfs.io/ipfs/bafkreigjx7wntkbchs54mtvosxa4no77f5yv6dbrt7w6rrwyewe3v3wp4e"},{"token":"6","ipfs":"https://ipfs.io/ipfs/bafkreifw45b5ffn326bm5o3ywb4dyj7mbun43zxjyw44tqid4jjwlbp2xm"},{"token":"7","ipfs":"https://ipfs.io/ipfs/bafkreifv22grkj226cyrmoyjodigb5gzaokmkbuwwy6jmyg4yrlyleddai"},{"token":"8","ipfs":"https://ipfs.io/ipfs/bafkreihgmlu3weu6cvh2giquzuynjc2ikep6zmyaenimtftsexlfxmwfqe"},{"token":"9","ipfs":"https://ipfs.io/ipfs/bafkreia2anwkj6vt4dqdcrqo4ayhy3tlri6bwtdtpn47gzf6xnrkc64ydy"},{"token":"10","ipfs":"https://ipfs.io/ipfs/bafkreifnu4opetxziapuhjsvvqogu3d2wblaqyhltjoyglqtv2djwxldxu"},{"token":"11","ipfs":"https://ipfs.io/ipfs/bafkreid45tyap7fnninwpfkdelojqf2mm6h26vybdx5k5ewctmlrbxowtq"},{"token":"12","ipfs":"https://ipfs.io/ipfs/bafkreielyaa6hwiqj3xhvxt45njto7who72wfvsjpvxqbi4m5pcq3z5koy"},{"token":"13","ipfs":"https://ipfs.io/ipfs/bafkreidnpc5tali6abew4ohssabsmv76db6xkwzsxryrycks24x3zbfhia"}]},{"project-image": "https://ipfs.io/ipfs/bafkreiap2nae5ph652yzaqwm4y4qtxqdg7sgkqmxdl2gvvkv7fcjbu2w24","project-meta": "https://ipfs.io/ipfs/bafkreiac2ihpu6wluswkelakohnneijn5semxfjuse7pv6rkzf2xiwm5nu"}]}'
    }
  ]
  return rows;
}
