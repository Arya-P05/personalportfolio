"use client";
import React from "react";
import "./fade.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AtSign, Mail, Instagram, Linkedin, Github } from "lucide-react";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Gallery } from "next-gallery";

const images = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOFac3kBqfy7xzRCX4jAYKQB4nKAiqpK_b3rGpyWQv5NrIMZdA5q5qApJGAb3INbNqAgcXCyh0BZ0X9uOtPaaJZAtcRkiksga_PQHAwQ8fmtjgSovw5C0m7xocTtyleWd5tnxYvyLBQe5S4qGD6UvFk=w2944-h1962-s-no-gm?authuser=0",
    aspect_ratio: 1.5,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNcPXs_VFK9uUVANYY7m99_HWSziGNZXrOfa8C4XXLQK740XvJoyhTKCLPSGvsUtQF8oosW2_V0OlA2kwIKnWe7geft8a6cODNcI-fWaYdEDYYPw6_bgq9Na35oOAzi7UGCePXl-FRJIDgaLbhzZKm3=w1574-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP2VB7bXz6pbP8R0PCyc3vh0Lv3stId1lae0yDL2Ztj4sR50CRoQJ_YbAGD2WcU9ODa0oU9F4BDsnX0fJUp0EG-NF9by6fDQUBOl46l_nWJxrOdN_oRwq6MDCYCABYdbkyk1jDAF3oPbbZ7WtAoEkSg=w1376-h1720-s-no?authuser=0",
    aspect_ratio: 0.8,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOGgkpSwOC1i_JCwwPTg9zSsgUSyuGIAFAoFyGVd3CLMbVP-pyGk9m7Q-Yxye4SdXx3fChN6paOMO-Ed4l5BIuLQFxYDEyPN6hZ_7WrVChkBRk9ySEB5Dsmmx8QXU3Lx1ZFrTozBAvRTdIhDvzjR3LE=w1376-h1720-s-no?authuser=0",
    aspect_ratio: 0.8,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPXdN2HHpa89wZO_Vx3fKS0NUzL29fnkf-QfTAe5DMmttcDHsIIh79WbpPMtQvl51lhtrOccOivV_V7mCc3Z5v2qJU8asZHckIHf7n-PNCyqsbWBaYqupFvN52L-POWlKkz3nJ1KqiMmsKsQGGpVViQ=w828-h1034-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNLZs1UMGnBf1sjltbxqMLXrT3xu_3o45jKFKZe6YUJd-Osvuite402tQ2_j0cEc0g278OLWSiCMu58Ls-PcyLK3AKXqJGLO_i23GN3To4anT-_uvfIbjRuudic741bS6IqwnfZkDjMimh8KgCsuMhw=w2294-h1720-s-no?authuser=0",
    aspect_ratio: 1.5,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOXDUk2c0DfJGclUq04gnRAKXn7t0GuwmmLe98oWE9ZSyP8jKnTdva88zL2i8Rd1cbqFwBWxO6Eww5rMVHH3HC5ciygv2jBu1l_UwblAYCvOhNNnE5KlW7NDZxb4RC6xaE8G03r4dXEUvghQMq47vYg=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOXpykeXjrln8CZSEnzE7Gfe_5kOzMQ1_7IGfhNrKvUWo2719F0Q-2zuOfhmdSz_5Yxtscrv7OXovGwhYram_4Vy4B-FUePFNqQjrv3U2YBFOXS77l5Kt8wsGQX1oSQUjN7YaZ4w-VqLaoC1GLmSGJ0=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNzCwpj7KSQoDpZN6Xa3W-LcW1blqQ9ptIEh11rIBp8AMLpYGAozyZW6sbBuol9rgCLJS7b48sIlyJ_VBMf8VdDsagfnHsRsCsSc-GRxz7JG2P8Ed6PUn8wytnvecvbZMHhqwPCDMvyaqdMpFL2t5lq=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.8,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczO4VMi4hsznhE6C0LmYQDwD75Dhy5gekOn6ALCijhN3j_npNcF6i3lWap78BuJmUOuXl9ytA_afsDsQHxSn1BpY-6TaatO3BR47WlJfLqgddMbWyBCjs24WmRxX7kQccidDwUTI_y7Q7TekPAXIOA6G=w742-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMgt8eDIalPC3zk516aE4jnnYes2MLWR0kKOHvAftymC20lSZ-KT-tSsoXBRPwq9ghELD9Qv-6kCbkjk8asX3cNPCAP0A7WUeKAcjZFZ0auugjNSVu0F5IHwDIlLvM4sTFb5zREdQEvZGWxfIVYsc7T=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMUU02KMP12xA1melZ8hc6eoV8-1Q-0kBLZwG0AVgQpq_kSzL58FMAKTlv63p97SSEUTGiiMUpCn00hstLd4a0ugzrMZxfnuevFjmASE2amSZfR5SFPE12P45CNk5ouYkWYqs28TOV2NHbRAW6sEBRU=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNd17--743p0wN0yymrFmwfMmJsG0SQIJvSI3yqpkZ_KBKJD8d0VCpsugxALre50H6rymOEN5GRBCygCujH1qj1mlST3J7oyrvZgP0oOoGqvkthxj1gwC6DFG5G6_GlQopug0C18N6jUIAX5xChO_J6=w890-h667-s-no?authuser=0",
    aspect_ratio: 1.5,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM1zdYkwrV9tqr_hnf5fycX51VhoViQgRgW4pg8PU3LtGCIaJ4qeJ8UO3tBTdcTp2ZxiJ0YA-YdBez3TR6h-f_4cQwH67vWplPOdPbs6Rd7nzXLnFI8gSMVQUzCXfjDR7mYy3MloUH4Zym3QcdTJV-g=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczO4nsSUoJvadBfEXztu_6m50w0gxDk0IUe0SCQjeIZ99Dia1tHS14jhhFc6XsYaOSup-xEUlwdihyd9zusvJF7mrBBGEB_SNsjjn19kVrr-bgAOd6wQaYgh6T7pDWQiANRfABechuJ2V5qbbXqFgJgR=w2294-h1720-s-no?authuser=0",
    aspect_ratio: 1.53,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOcxet6XlflrGIW327CuKO9cXXQb_UsdRVsn8tmRSJHfuyYzX20sheLwgDgoi-ZVMewDAG971YII_EY7rch_rL7hwfTLZTtKHP_e3MrBGnPqr68dCbQIVu-JInBquKyz7FPjhbPTmzSO9qEUMHEUNXS=w2586-h1720-s-no?authuser=0g",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPD3tbVMeQe2rMvTU04Y6i1dj9TYfyrRKr-2lfuI7dN0rMYvGNFSP3dCBOzFamO7dAUFL3yN7iB7TVcdi2St87neRjpk6yh4D4q3y8LkXwX2RNdafc8DTIu6SE7gF0fgeqWgetSfByiXI3TSt2nYOjw=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNlGGrQdmspkB8I4fF9inxExprVLEuJDFp7Jw_UCpA5pZz9VpswscM9EThPlJKe3Um0FGF46PgP5BAoJ1E2zS1hiGwcofphZSFoDCQYK-zHpHPj9_F42KeG8VyYXizp7uYRJYR29eJqNFBm4Xwd_npH=w794-h1720-s-no?authuser=0",
    aspect_ratio: 0.65,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNLNgkQS9VLydZLyuKdfWc4RlnmeYTBsM1kgAY5hWimEVM1mIaOu6eH2BPP0TMTNxFFrA0txXZ_wcAMDpOZBt1rUlJazmkyFrN7iSZ0l_LLma585rMALXlU_DucxkDymA4uKh417XXchvLUgqDpk9xs=w1144-h1720-s-no?authuser=0",
    aspect_ratio: 0.66,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPBcLCo6nDuxX6kW0-501dbUAVgL_IUihaIFpeS8R6lQMzDoZXjw0Edt6hYF7H19LkyH22BePKLX4_Vq1vBhE8vLe5n5FYcnFjBsNT1wXVH-pxOglEurkN7rVWDXaA72Yt-Uwoxsqm9JSIgmgh9Bu1n=w1376-h1720-s-no?authuser=0",
    aspect_ratio: 0.7,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOFoc5JPif-TCu_M9Kx2vAMwUEDzoaPYpdmq6vjLAx3nXO9XUkyr_wV7UX_rvmDpAEGuTHeSzeNUVnvfigm2Qpvl6daxxwUpm8B5MZ0zQgp3cz55_qAc1p2kOXIKTkkgCKG_yg_tKOWxFmSdCg17esn=w2294-h1720-s-no?authuser=0",
    aspect_ratio: 1.3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPXgpLfqB78ZbEnY4_La3N53VBVdGhAxsk4oTOcB9n9Clyt0oDLya255GrD5jLmZ5Ef8WtTr5hszE9WFbt7884wdqMuDx_xXTClgQIO6sVOVV5PNmbPazmwmjFbiRIcfcYxG2wfiEmQaOnBBTedX177=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNk26D3hzFuYD7h4dbsyWPZDAbhNE62sLINPQihmoJz1mJuByuHZJF05bcj8yMg8fLgM7SZofYDqG8BVrMfuOSiNWpNcFcn0IRPmDIDrqIe8SB0VVjIv2UR5xfAfcZOYPPz_WZ2VAPzgs_uNlBh_JB2=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN5MgWbE-44bgFzCejOmJTPNGJVcelgEH9y0Fbqxyx1nUaGezf2UGFIbFyvJRZTl0sOQZnIIcz9JgUNH_akN7tu3xsxot5BSu7sTU2X9aQyjPwKegVSfHJ0DJVkpOI8zf9QjGdeThras6SFHPVJvCXw=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMh0ER5lEKwCRvxLzJxlbr9KlmUlUvrsQobkBT_Fo14cyfa7EK6uH7miuxTJsq34FEz0BaXIjEu46zNQcTF0qCSWD6GPEKnvIyZj1lbylo0xlFru9PJIjClB6sKGdCpGdd30KmTMxC5SVVc_9MVV-td=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMDu8TbRKo2NDOfyR-FUZbGna7UCFiYPj0lVWo63MQj3zpeNnGvcUzBJR8Qs1Bu5wCB0cz4Tq3uA4M_EcYOapHAwn_6UGxD12ublN6TWBKhnIwSraTt6Vu1xy09yvY-juZ-Xmvq1rlW96nfXtplnyY3=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPFEAsJNTVhuNvW1BkqGmdh7gX-_-tx9wWrtF_e9pkQ4Pfk776VatWSbCZkfmUQYE5apUuEDR72fmxyMuApsF8m2QnE8hpWcPhTP-RLeON_9LovuyVnHFCbxTcsuIsg37Tv9UBjrC6G8G-CmSiVSWo2=w1016-h1720-s-no?authuser=0",
    aspect_ratio: 0.65,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM9ThKEuBKpUZaa-tDRNLo9G8ehq5_kIQJF4aEfG8h0FkvcuIx6qVGP34Hi0tdqPKsmgSp8MMeYTUTnUdVGyvzIxRRkLEykat1kko3PLlShV_BV51Z1_8Tpvzrmermp7co7WMi_Dh3ONT2hqJ_Kpx9Z=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM-4wLRN4HANh9Ujq9fPn_TvbDBgmo20HTVnnyqckKyiaa09iiHCFKgYpfRdPOWYsyjlOp1xOeb1SQ3sYYYLQ0JJC42IakOZoXKrKD_MRCSzD6pTsK1K8rA7t1hsfmUM6iuViH5NWzZyFM27HIKq6h7=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNgfeK0UfpWutXjXiryBYYj4j8dgmcTwgeFAqsMPkEIb-6sJGZ15p016CpfeyCGUhjpt97wERm_d1r-ajnTc3Z8Ff4rsd7Wj_FKo4C8Ih8rGoLW4Jjjrng8OOck-IuHIgKQZrpYZIuYzk2E4Oh_SGN3=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNkAq3YjF7M0piapIHsMi2Ve-NQrDh_9q10Gk5lhrZTpokaSLU19tiH8p9CUsiNOvK3NjGpl2NAdSo6JlNW0BfHk6llc4dDONZiKwJm80oj7i0hQpKQNeG7wPi-fWDVKPktKbqwGynHZ688ULDDa48B=w2974-h1684-s-no?authuser=0",
    aspect_ratio: 1.76,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOIpYtTyMc8VS-HGiymZLPAoKgBnCySLBwuMw7HSVPrbaoXkd_lHHhSFCgD41Gbtiy9tuZR2b5AAw_yBcWdY44zo5E76FOcxNjiIUx7lUnVEpWmwj-kopRGxh3-sj2t05vplmmLN76cPgzvzHt02syq=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPRQ2jTrIOdmYao1NPRuFfSNf2q1jp9gC6xSchxn8yXuTDlHEQ0BkzOYcJoeB5F07vBZhBtTCMLVlhy0-1VDxJFzfXttRQ0GXqNAOHJhKldBOc_z2naNhGd-ojonnCS5oFSUagnkWrn_Iksqq1MZTIc=w2586-h1720-s-no?authuser=0",
    aspect_ratio: 1.43,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOwYqcDA7UY8dBtY8LNyHWyPXmX-PKtp9RprWnfONz0pUoXc4HnDfnhB9fNRcRDB09Zucs5IeeNbXe6-L8PjiE3bsJPGOP4Y7ke5oV3sdPPDNCDz_PuDW60iEre9MiHYMw874eQGggtobUbpmd0us8c=w582-h776-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNQG9t7kfkZD404QJmlMw-XAX7CFfjOA2I-Yhz2tgbpg3lga43xftbOF58EUBgxCuh92FP11OUGRIkP_kuUOhB4SVYh5EsA21WBFrfvRcSb5chWJ_iqlIt63OnKJSgnuoYVDrFtKE4L93VlQoNNjD7U=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN7kh9cYJF0eehxbn8Dzy4VMXgd91LMZdHEHV5DeG5AikKWw5hc29iEC7B9bG8AkJPaNZ6bWdDtoXtG9dXCyNyGd6gvRtmj0rfU0CC0K4q0YgCPFUE-HMWLLyrZx2wCrGpwV_anBwCvUJmmCQM5zGBY=w1144-h1720-s-no?authuser=0",
    aspect_ratio: 0.7,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMEWqGkpDlkFaB6KIx0xL85Rc8ZqKlZsJNU8QhG-u9KJxiSYHbNcnDsAvujRiU7fPoL69kvHfKHHnzfu0UTNa-WucFuNKU-bk84LW0JMCCaT5C-NAPAqoGJ_Wcx-yVJAjPWHMCBApXiIG5B3TZua96O=w2586-h1720-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMbxCNNnyaSSC6Cv4DaFjnvzG-bF-bKlpDbGguyYXyxLr4mJ9fKDDiifI7JqqiJGr290tPRCOf19HlN37vMPYO1o87XtewWeyYhk1AdhHtrRXT5yx44pggJ1zKPsqXCshHvYB8YX3SbIgKRsGAZ9bf8=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN9-w73aJ3zW_G-dL-iArxWULv6yYfoOQQLqBw1hZli2zCmifV4gCDhKgOncSo3QyFnHjJb0zOAWEgfvAtu7vQ0UAHFetqZlBEo2an0ghnGpyEQLgaX8r9Zw5l2Hp1e_8smeUaJKIeJT-dzslGtzmta=w968-h1720-s-no?authuser=0",
    aspect_ratio: 0.65,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMrzs256Sf0aH6JD46_lj1n7hBViHeujkgcKOi9xzdtrWzRqQ2bMpjojYis0eNpHPzf8PzF5IWdsxX1hr0rD-rQGyMDOMPvfyvDXJ4MiywytQTV5paaERpgY9WQ1Ya1BcsEltEf1cP-7pZJT0Rt-oNn=w2586-h1720-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOwBSDPfHcdCQAla6a8dhXxx7Hlkzd0A5DTbNBD6o_HMkx4Eng2cv6MbgwrjrhexLWPbbKj1b2RMwT1pn53QUYOtdt5_Bp72NWEAoeoQuv73tybROuCectTB1JANf0JkenYdLoxeuQThGFNwqf0Z5gx=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOalvkQfd1nFXqmcaT-Hq4JTtSGDJALdeRitdvGuSyG5-2QgmQZyDxAypARmKuTC-E7aRp1Cs_XZCqHeyi7rOZHfHccSydoHVohN6tZfJHmejyJW-teGWms3Vo9T-n5qGZ6c6NsIsVD7LNmoM7qaoEd=w968-h1720-s-no?authuser=0",
    aspect_ratio: 0.7,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMRysDErbrcxZrMd_3v3UcM2hPKCKIzxmFaO9J42vBzg3F-p_gwKCnHE2PunZg9v9fMWiX7p8924szRdhYJB6_JmyDYbE0FEkA0-LruRA4zUr-R19coC5ehWFNbKaTP5yG06Lf_pe785YvB0cHsGSok=w1203-h1605-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMKlX1rYE7EA7g7BzHB2nKRb95TKWGeuCMOjo7I_ciJ1Vldq4qc6dkqd6e9ODG7zr2rp_aAajmLc9TLUgnNte2LnXkaelhP039NJCyxNAZ2ix9MMWDquTePSje7LWOuTeDbI4V2tg6X4eIlNMi_fnCt=w832-h1720-s-no?authuser=0",
    aspect_ratio: 0.6,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMsJGiZVPmT_2WGVFX3jCdcfFs3zJee5b6IWIMCJcZHHYJFxEsKvu5bqz-VDdRJR9ac35yMFEVBJvTcsu64ZjFEwNR78TCYf-sPcAT6TCJ3c_2NebBDPNzxFbLpoPjCQSyJjq-_AuRInFBo-WBYYiId=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN0t0WETpBQW1daLYwPdPDht1CYbDFTqQgPKNhowfC3ngJNOIlc1nchHPDybtKJJjJIcA69VXTdCgkI9fa66WLlYKu2XSV9ukBzhQVzL5oBSnW9FTlf46bHrGc_eVE41KMw1W1pr8hSd3TzX86Uf8BZ=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP2eQOIotpUZXmjwiZPzHTW4f8RHeylZ1AHJ682wEtRYiS4pWecuqBhP4Ch3V4rolLUMA-B2zzoL1H3ac-lC9yqsFdonKcpEdUA5ZC3WEqMUdDQim-LwYPYFME8g-gdBl5Tkp_JqbBzQQHimRC05BAk=w2294-h1720-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMr_UkWOhPUZoDs6O-46GiZ4WPDsBdenTvgOVXvtXncMfiFe_POAdM2OMQwjq0aSQKlYOOZDICk18IoJtZThBmydMX-DPi9OUp1Xe2N2x55qIy9ZOHuDMhQt3KP_eZTScF5xBbJXfKHjSjCbs8kbKCq=w1144-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNsoKHkEYiThIievmFZ5hZAW4ZLN_IX7xdbAjes8xqKqC_bRgeUQxmwf134pKmBTyLBFVW64fQlpNsTGEeHlQyki-g77EYpOOtdotuB7dy3JtyKdcBtdIy_RK0LCnLW1TJh5XDml-sq16IM24nX-YVJ=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMssQryn9mKpcIr0_H5UocG88j7-m2dA7jqecOVb_9zhu5_YLAzy_-okr59SfY4fqE-YImB1nJHQQtuIa333aBOpuqXeSjrhYRdvtYwiXlAqS-Xpwst87uWp2FTEhRUWJkIJIoD8n1bURBtZolWSY5v=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM3A0if5az2Nct4JWvFArpLyX-vBNCKr8ZqPHb0pQVzpKijANOhBRZhvLN6oJ4F3fhR0EVHH-nq6KTJXtPV2jF0Rog5QO7qvQbOsmwl0W9UKZUkFrXECCU7wCcvUz6aLawnxwlxdb3fFKeIPzuaNKlP=w2575-h1684-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOydWAEcy5HEmOUaHgkd2iBaqhtTlxLpoEdrOaL4h2_aWufB83vcnz-j4qwYWL46U7VgPYARnrszot1SHvbI7KVEdnVlkJx6v9o2mDuoB8Zfn4FobKlnPQQRpl7efPD2KHFTCbSHpfd2aQJut1p9icj=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPbYi7Nb36Da51V1v3yE_XspjauDM4AV4J09LxsOqs2lF0nknwuxlsjU5TNEsfdhUQe_sR6U5Aq-hnFJKa-EnnhdUfDZCA2hXLGLu0VbQBQiTKLW0DEvaxZ4dw-kf88QWTpg3WQWv9SprQ3P5TzFULs=w1144-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMxy7cFLOXZYn1IzZdQR1EV_ahTlQ941bnmwipVqS7BvJkicUxwGobjSjjiwPkmvsK9xxVf62DqDfawOygvmzF_cZSaXBrjdTIycxnNe-mEwqlptZllBezQk9Jddla7Z48FljXyGr9PuD7Np3Nmivdr=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMcDMXKfPZF8sVyrOAdcl9baOG_gk-JGKB7aW2hoQidUnxcYfW7leTuUbLAU2Gy-NrLnPmaqgvzyR9qqAK4Qu4dMr81ELNldnBdh1dc14WVggeVtQrWzrcCUGRH_jClUwxpxHCgnWko8efUpNc9Jb-M=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.5,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP0Oa83v2Wvi46CbPucYLWR3lCf4ZIrKfGDCP71r5nkDNO5eB01hII74WVGicqr064XTTBd0xuSTUspH5jsN1bZBRMaNXMHunFVyPl3-KZSas_uY6N4O5p9sS838a3M7rvzDOjGdZ725JSbkuSUWUwh=w1144-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNcDFIyYQ7Fyo_nPJdwkowDA9G5FJspfzAcRLr8WMm7L5xMnuZCCwzUl8d8UYNKAmpzINz25CPlTROe6d_E4CV48H3B9MIPmzyAyt6bgv2LzUSLC-owAZEJLR_zk303HEYST-j6nre_ONBeHiHh-wy6=w2586-h1720-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMXIiFKW9sw-qrQCsFM2_FYBqrByy1sCcEkbQH8OlFbgPQt63ymJQR_3Sdk7n3VXPlyHSbKtFATodySYiDgnlPoRwL-HnATSzVFiRo9Af7v2-dexcPt5w0U9uORE_22qKursykQwx1uhDw-rA9dHnoJ=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM3Ef4qMpOhAXgAV2-FZzLMkgRBDFfmxxj1wAyb-fwFiWst43lZSrNnTL97m067dHOEOqGCJyc8gcUTTzAUHh3IpGpd8GEHay2Gk2TLbKp6p4VujRkjfKvZWMTpIu86JZaqKaSNcb3pERWiAuyRepn2=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPebPxFU8b0MwnWUHNKklXiB5RStiW6kQSBKRaNnpvQ8xcV3Tw6-KE4SWpTB-v_A6_iWYW1tIxmepWm-LhTzet5Ay366ihG_uedNXLh_QgRw59lU9MjY6yhNGfkG3WYpYsWKcc06bZfh5bQMp6_aEZf=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNi1UQLshcog5ZLC8n7RlplMI3V1TZ4jDujEJOJJ94uUi-h-bh1jGaf5PM-4KKifXon8TMJkghZzFLXhrQJb0hH_QhhgTsuDAmBe8bHap2WNEejMV_zFEivnVGt4SOiYDSedOZOsgfZoqmxHJ4v_y4U=w2974-h1446-s-no?authuser=0",
    aspect_ratio: 2,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczND-vEdud4BAy1Bap-UYyARQMpHMIvQzQkP2XTukJYipQnlN3xBvA4lTyDe6SXZ9ExLUeJzaeRVVNAtArCPE_T5-o-wGvMn_0UPt5c_MOBxAl131PKutomiIfOTTf414Pvd0z_w2hwhFabref5a3ndA=w968-h1720-s-no?authuser=0",
    aspect_ratio: 0.65,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPVxXvA4bF56q9g3qW_1KoKwf6wH6coXCcTPQm244FIhZLOnO5IaaoNuWHHo-4ZNaXphWqb8qN4hOVhDI95PzQmvan4KxabnO94oPggPJylZookrIGARiZGX8bf7MvNdWiD0e_0dYcDHboLGjXeWnvW=w2294-h1720-s-no?authuser=0",
    aspect_ratio: 1.39,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOW4F0Vbd4wfjcRNDaWnjSw6JEhCV_R8baD1xPHW3-rGSoleyQRrBTuW11SNvOat8gxaSwVRqgKIliLu9V9MfcUWhrFaH43SxIazJroYtgxf0csR-szgL9TqDqcRiCD9qcWc4WCtV2k94OM167kdwVM=w972-h1720-s-no?authuser=0",
    aspect_ratio: 0.65,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN2wYbYR0RKwRybY90oXWdALHE3Y4vDF6PMqFRVBkqRL6ILf7cprWrLsM-Pu3eed1_lZIQ6EjUFJg8KUJiL4EZQMVDbPUwXknVz-t11iwtWDLLEaGuHVNIGnex768bMGhM032vKPkgjDY3YjmZNlTGU=w1144-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMmTA9w46woguq4YEOXtLaqJF_uYgiL7Mfh_xFAg2v7IQcHdHGHtP65uS1ljBm2qfk0bRSjFEJ6PIpEoLnwRz56mDW3viXcMQzHkqYaATrydIwQL4tc8EmMFv2QrRMIToq4s74-YcNopqPNaQaS_F3F=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczONLYab5HeNTk3Cj-M874evTxpmRi_Bo1upcJ9B_6Z8Ez-HwdgZUJqk5f2HLXzwWwf4jNJLHbulm1Kyob8XryXxKsgvkF6ZgymiL8jyUhBc9qPELulOl_SW7yRNolhyUhOiRadz8TyXxa_3XOdf7bIt=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMbvm6H_2ajsTEqaEQJx1dbmKNjXflrd1qFwN8vJ50y_iIhU-58-daCiEzFKIxZLk19ViJ8aJgGypqO4M2rf50WCJxP-fhsQEVN-CBRYK0WqsIdaJW4X5P09dcYR3aZhRLe3nIdsgyMr1LjWLLQ-bOf=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMbyRJXIca9t7BXpL3-tu1UGpCDsSYSPajGCSH3q56L-GA_7_I5bh5jhKEuMkVOI3nwDI1Pup-Y_0-VYWxJuD_6g0ixvaP6vCg873zce3lHG-581og8Y9HJGL1LZ0lYHDjxPK33OEP66Y34YuciCRwh=w2048-h1536-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOoC1mjahfD3r4jkrusMyZY-19iirG0gTgeiP9UN0iM1I_i94wjiXeKutnLsK99EAxCDbtQY2HmyzJ1ryDZxniOZ_WWdFL1HKE4-ejKEbDGpepY9ESFV0MTYPP_apVSTD5bNopi83W6ZGdsOlocwKj_=w1206-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMqRJ3nXZL-E46ZJsIap7llqaluHNlPYB67d0CqVBc2Yck72AiYGAfY1eyvkvcuvlBkbdIR_T_2Ws1nQ5CaqgdGSV4xX7rWwMjvEBvmUagOsx-LdNQLUm64qFHwnMQvK-wQJe3unlzFTj55QCVCFDh8=w667-h667-s-no?authuser=0",
    aspect_ratio: 1,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOoooh12vvohV2nHUg_8-5PPKB4SiU_7w8nMCzaItonIoeyRL_DXqwBb1NQLXRsUd2tz-bXU78NpxPyCxVYT4YYibkvOPwZ6IL12Qbk9km1jvIbde2mo0M-TvpP73-bZ7BmxxLSbARbZaWz_vRSDiHI=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczORnVoYmDy2bJy9Y6iKcg43ziE8B4oLjeqVN2mUS3oxJB58ApOXefV-lZKrpyiINyxEEWtNJyRlf53VbmEhNJNZii3356ZnAUhsF_JFn5miO6x7TAs8oIpVU2PgRnt7revjv9j43YpS300KFqkZonZf=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPA5CvnNgJGW6ZJQnGItFqLPjgus6GTm8vumj9oX0K9W223E7cDnBGNw5ljNUA6stUc0XvszgZOAkYZcXK9IsR7wg5mdqL1ZjN9FzQplS9W4SUSse_WytHM64O-kVGy8p_fvlJYrWJBFT46KUQs9ugB=w2294-h1720-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN9Yn9hVpRFEsRRBJV59Z4LimI4BWsqeeUz-e9HCfsglbAwrMuzUZwhzYeS4g9EOoMNYxJWQV0IPEeWJCBut-m0H6DwyKwa-Ks_FsUd15sDxg2AA7JjmO9s-Isg77IJ-x50M6lb9U14rIXP4ikoLopb=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPaZU8OXyGy98zuq07kCcGxbddKF57T8CdrcWJFML-Tsr-Hkc4KuJ8b1P6m8KgvY3HnFJgURWr8yc2v90YyzA7ilyvXe5fXTms-wgWOAF0ONjj_DJVkzICrnvReZ2BcOiAdlYPsRKQZkau3pY2u4lm9=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMFk5zO5GFHc1SHpq5X3hMRosmeJXuFoISyA8gZkHQNOZPmh-7zkQ8ulXoheGFYb96sjsVqhQ0lxsTNmkdNtHUer83-TI-JTm1L9ciq5fDs8eFakPKYgHG4Ol8f3Y_en3N3g4TXdITM0egRwE6ON05t=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOzBnr67FNBdqLiNXL2TCkEsv4WPJxfOk0QDch5OueGHB9JmElmSgq3B9Ega9a9i7cbETeGUndeLkmy4Af7I8ND_-NUuuNWxd3Pz6AJDx6jHG4_dDpNPiLLJPG5ivGdpn-0Saf3AQPG0CgoUSxRtRLZ=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNU8i1TrJRVixCdTiivV-kggY4ZyMyJLL4OjY_NTeL2BzQWFbviuijvYR25cTNMlfuBtjPt47wMJm1uI9kXEJPZs_Hj5JC5wpTEYh76MR6sqZsALmi1yX4h2fl1kQmjc6Dk5jF3OyIxRpJS7ZpMoIn8=w1566-h1720-s-no?authuser=0",
    aspect_ratio: 0.9,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP5qDBoYDF5qVEzkxtWfqksdaOItQq7KmoFsCwSZ7fo_j-Te-pM_JaFIOIuGjOaMN0STGf1fBgSye5c3EeLaOouFsVnW01-PzvHia2SEyTSsDxeWXjsutEwJZDqQZsEvYEVS33vnA14Vq_1ggKdZLLu=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMn3zPv1ISMxwWudjL-VEYB0NsRMMgTjyOU-N2TwZHAMIgVKEwDQQjGrJBXMOKmDNIvHB7ZvB_EghJ6WNScK6XmhPAYwIQ_URBJhVT10OSgVskEcBaXv9ipxyuEqKFPHOsa0q_KjCse_MoLQFHI1Hn4=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOjkIMt0Zl3N886FR_auaGp3J8h9xK5uebRhVk7dPW5Zm8-hMg22nEByYgabOJobma3caOCyI68tWnwZJHL_sSXlfpXe0ML0mK9NFcHi30-Hn6nzPg7TI4SP2GvmzDIsuhXBPUwRWAk2eNWRogEosxf=w1290-h1720-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPuJgPWjVt50ryK5Ecr4JRQ_jrEIcjNMcm-BLXH6gy8QgrIzNwVFqqaNyiNLgfHfCNnMMLmcbHz_xfNggwvce4JvbgI6u3AbUGXxdYhvNrhdEMNgqOveqXeRcfG7L_P_ybGBqxM4sYLVhzorxIwuzi_=w1376-h1720-s-no?authuser=0",
    aspect_ratio: 0.7,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM8sNIqfiTJK_hyo2-636fK35AxCfoluiKKi6s9Ym6GS9ck_BwXT3KW_WEUy-tr-HeTaiipcOZ2pvDCiaOx6_bv4ouRXtp8wBA4cSELpG1a36mMD4B7J_VDgPJCS5M5cd8Z13HBhQsDKxDcfbLiQ34_=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN2nevi93f3LHELPntbThV5yEbFm0sK7CDgBgjbJWJhkz1ezg14yCJMj9vPwXmudycvVjr5tjlOWaOztx9FT15Qd4du7DRxPMbMGcv1volqttxswTFWM6zoSyry5Ji_8Z2s2rdHJSoH8beQ3hSMzhA0=w781-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMJCmSB4lAmPsqASr50asJYFPiZmMDnA3_SqFOaAUjc6Dsu_paBf01Fd5QnUSsJAQlzqSw1RiqtpQ9OY2UBqP-L_RfStIkPRVHpJI8vznhdscpdu7TqPVPlZGjNI9eAttQN9mia3FENed4On6Znp1Ut=w781-h976-s-no?authuser=0",
    aspect_ratio: 0.8,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMa65Qgw1wM-aLeO2j0qmVU66CdZMfU0aEKUOrZEKL72Zm7aF2OTFOlRj8zy-yxo2RujH4XPYx6x-teSchV7aKA7AzgjrMjbemhK8WOVLhrR8DDQYQOqOESzugmVV13RFHlcfU0gShjprPVZiEZ3WC9=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.33,
  },

  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNCe-UTy4vR04xEjCgt6NNbwqsiKRW0XFCaiKuMtKPKM3v_Pf1AMdEHWcoVzUxlvhhw2YYytwBrACWholqrtOu6gl71ZCjNfaJax7YsDvBqT-76kgM3Z2IKV9p-bImWhv0-xqVV8gk7Do6myv-kJmeL=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPzBDGznbU_JlNbW74-dO8gfnsdiXMn0bYfgxNYAWTJSyhCs_jPNO2bGXnP_a958Bt9YE8HotJ_h83MS8bbSep1Lb2DKMJ43ca1rQ4pNNJ_EHa-dmGGeCjzUw2T9NVqr56hmbiB4PknELpSAHiVpc_G=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPeS0fIPL0VPZekmY9zS-Joroh6aG0EhPYmxCYPTsHzS9tMDkwsuqxd3NpnD6rMm74z9ztBihiDtT9tn5TypR6WKKepBQzLZV6NB_BjTSsB-CsYX6vItuDGKOPa9dWwcwtKq0sc40hRMKJxJ6UVOm-l=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNO7H2gfX98jqPXtCz65patOn1TVnHuPK4LupM3g6gh8F40yzUdiEfVYk8ZbaR9qzsRH6y5NDMMsVAuy0k5EsU9ZDV0IVFx2EcztXu4MlOrpST-0rAtGbG2cO2U-FQQH3nfgBSH4m8ponXmmJ6TBUfu=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPtyEPlE8TKL-V_J-XvfjZFrYMQBYnZYx337mErZNhObb1HDo6jEF-vji286mtVtGddQLIhdPqYMgCzCihQ1zqvFLp1bTDVqwGpqriF7xrTvMbwjjWH-kkcvMpCzTG798gg16yGqlW68YxIhzUj08hT=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.45,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczM_lSifJ38JNvDnkR47O4TVaKfosk5R5XzCfy2BFcDZciWHOsou-u-Vch78h_GWvqRDU2vrAG4uFFr5HgVvnc1a65DSfCenMC5NU-xFjd_Ur3a0VVJs9KhlMalHUryRCU6Co8acIz_iv67DJGJMwhoV=w1711-h976-s-no?authuser=0",
    aspect_ratio: 1.6,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP-9OYYBJ_-tVosYDGQhH1Nb8qfj2PYjRV8vSsk7VnKe37_YQq7Xa1XiaA_FmdO-ksiw5pyhvMg8x5JWPFdQJ7-AA7VuQRZ40RTFRT3gHxrAp1Gb_J46lx4rhe_12FEErq21puOQLMCbpxmBWZzjNbY=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNgeim1gX-hAwu6-Ob5ApNP6GEtKAcQ6FTUoMy2u_2kOIvf_PybhlqRJ5v6eRTStiAhQA1tSmlYRLYIFalnsTLH30jVVGKyKseb8nRpcYV8D4Se3dx1Fm-Yxd5XOAhsqLQ6RiBFIr5hB3Vcbt9nxyMB=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.8,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMhM6o5iojLo-DJsIpgfywRwAhIfw-BK9IXLwJkS1JxmRbeOsi9M_6NbxDyjzLE2rM2-57Gg-ibFIAGp5iNYqy63R62HNNzudUVxFxq7vKHuNKwfDAU1W0w1LOtpBv9onA7soh7VZRLy5GSYvlTVm0j=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.33,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczN2py8wTWGsRfycNThODflKEropRFKbZWUNkim_i25ZhLoGxdVmd4x6ZeIgPrqQGgd7lwkGTZTsccna3y6aAMcwaKm0dpxdZt0ixfnLhY2biqOHtFdfJ0JNBiTaei3xo4Rr9tL6YOHNEcs54De30Byy=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPzeOnSc_SYTnde8RIy_mJPIL1YSd5F68yvbJSeJfNnvayAmpb-49vRgaHS3W1ILvZYWrvSw3sRM2MQZDi3NtKaJAYdshAwGxcd6aXBnsZSRmgAb8dWGpzz5CMQTGeramjiR_bcFobFNeQP1HKk5jEM=w781-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNCDDyZwQWahCxp7sDNQfHHaqYWtFPXwoakqfm6H0UseRsubOnK_cwM0kmjhkk2C-HVxu9K2ZJXmhjyIt8NTWT-mUWFVkQNShnXZIfCp61XTErMUOsFZZ7WFBR24J-6OHYATC9Omolavl6LV-QDKrL_=w652-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },

  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPpUnbO6cnvoWp6yNx-b8qTtTFHEIgk0J5X6bQ4pBJrgUHv5h4AH2S2oZA4nfXvCHh5yPTI_l_6GQOMR3Cm9osP1JeySFR2Yf4BPTE1RRHq3lwdsM7i8a3K28uYWp38ZxuBRR8liZN0LRuKhtENUCyf=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.5,
  },

  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNtj_vjP-QLVZ8nsU4b6Dmh9ZXsme_VSWSgv6FiFJmCjqj16gHhLcI9qhDSWMB6OSNX7224oROcrP1T88ly-702BrA0xNhjkHpNrcntV2r3-Lky6UV3pSElsdxqn5UpzstUn7rHATyhBs4J0_KNYi8g=w732-h976-s-no?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOyvbaDpwA9n1SCskJjUKCpqNYlGNGFIOlnDISwCZcG3lR5HNhB_PEF9jwAHlvsOn0z-EvMANloUi94qYieSaiRvB3e78PmL1v_atywPcN4DcTgQOjrxRAxV1Y8qXXgTf_Xt6Fc4stA9J3QSMexrcac=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.5,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPFGWLJCU6cBMrH1NeqPasr0wDpDG51plJnEhuk5TPzTd64Z0jbYXdDaghiyIWIeSxV7tUDZm_MkQULsPxz2HUMyXx4phohsj6aN9EPSdfZHNh-sm2VBr2sQOISt7qi3tlLIlYJA-QnUjO3YDvykkBF=w1301-h976-s-no?authuser=0",
    aspect_ratio: 1.5,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNjE7IdEEXvWCL6lbOmUjtJnQSjoNZxj1zPAKRI-H_4IMRNUqCWSetye6DS904LFX8fIrCbj0ZKgUl_R_4_QIYLcrFPeMp51KMucsBH2Vdpm0luUcC8xtxZfJh6mEwSw15Yd0T5n473BT4cB343py9r=w1574-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOzJ2X701NMhvkN9voBFrvw4beErJ1TM4pUP7eRp1j9iea0Yiq1GgAR-e1DmZyyf3VO7_5ISUDiEWTieHCd064zNDTVWVr6lrBVbNXveymomdT_pdbjy5TYmh39H8ne4PXk2zNY1dQfD7daSUktdB4J=w1536-h2049-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPFIxEKhBI4vUW222qOEYbexot4Uj9K-kmm2gwYBHh8Km1A_rnwvbh6KWo7Q4Pnc3KyFRc0fZvP8urXwSwiUhqc8t6F_a6oS4G-d2jQwb2s-w_WdESYmMlEJinB1dU0s2PyFT37uLYmBjJw0x_DOUGy=w1574-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPoXUm3H6ftHczDJeY4MaB3HoE7J8s4b6F5cvFTmtjJkDmG3cYe5pevxQ6D7K_gthIqhNK0C_B1oUQAyJjcoYfboJgRc3N0xKN_wdzFiiLi6ODKBgcy8TCBpCawqlVFJNvUicSbdShH7N5N0dBNDT9r=w1170-h2074-s-no-gm?authuser=0",
    aspect_ratio: 0.65,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOMq4YhLFp4n7zZFLOS3Xa8Tc8Jm6IP1QhrUrdTBcSDXj4kxeErr3yqJaPI47piDpoBqIuoUtfRxrDOCQ1mmA3PcFXWVL916wnrsrsfG7a--iELbX8_KkGEaKPw5Vi4dBkzpNsxGEH-tIkj3YbHtqAL=w1180-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.68,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczP-bzgRhkuASB8JzNNVNavJ2ip2Bsp-ZmNX828_HSBtNQkS_853xKalUxTN9-qfzBipxqYhDKnZKJ7jvHT0Czn4UL-okus1wC9yLqqSKka0fw4YJQMRPlMOkNowx66RA-LTKVr6BTRdCKXS9ifYJ1HD=w1574-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMC_Tc8Wbi3OY8ZAIIT2hCF1fx5ysV6WlLsPPa0djKwNoZq6r5D2vgV6LOpvlp0gWsCmFqqcFSEaK8g634dX4HfkAXFcFBAcPjikx3vnhfEtOYFUghm3-TC-c5Iy8KjhJYCp3Q-JjymhOvxRqPQjzVG=w1576-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPLWErhW25XxDKqtOwoDNM1p8M7RFs3gU1JHev950sQEtP4W41pr8Zavcwv2Fkr5vgng0c8Th7HLlsYkrpY9uY5YC_VGYvmmOLCLpNjJ5UbR40gRq8XTRL7teX8kkqNTC0pc-Uzskw8wKXcflEWQQkP=w1574-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPnGzqTOrazPIEhQ9LefLLetStuvLXabUp1DHFfRP6UPGlI7vGO78-7rZfNMw0Ch4RR4hSZoO81_0g4VHsZS0f8SdrVJ16KmqzAr5Cc0lBKommMv6zuL_xcjJ04ejGKBYaiMs2UNw7vsWDHZcJrueXR=w1574-h2098-s-no-gm?authuser=0",
    aspect_ratio: 0.75,
  },
];

const photography = () => {
  return (
    <main>
      <div className="rounded-images mx-auto my-auto py-20 px-32 flex flex-col gap-10">
        <Gallery
          widths={[1500, 2000, 2600]}
          ratios={[2.2, 4, 6, 8]}
          images={images}
          gap="6px"
        />
      </div>
      <div className="fixed left-0 bottom-0 m-10 fade-in z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <AtSign />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Lets Connect</DialogTitle>
              <DialogDescription>
                I'm always looking for new challenges to lend a helping hand
                with and meet new people. Reach out anytime!
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center space-x mb-2">
              <a
                href="https://www.linkedin.com/in/arya-pa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="button" size="sm" className="px-3">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <div className="flex">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/arya-pa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">arya-pa</Button>
                    </a>
                  </HoverCardTrigger>
                </HoverCard>
              </div>
            </div>
            <div className="flex items-center space-x mb-2">
              <a
                href="https://github.com/Arya-P05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="button" size="sm" className="px-3">
                  <span className="sr-only">Github</span>
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <div className="flex gap-2">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://github.com/Arya-P05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">arya-p05</Button>
                    </a>
                  </HoverCardTrigger>
                </HoverCard>
              </div>
            </div>
            <div className="flex items-center space-x mb-2">
              <a href="mailto:arya.patel2354@gmail.com">
                <Button type="button" size="sm" className="px-3">
                  <span className="sr-only">Email</span>
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
              <div className="flex gap-2">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="mailto:arya.patel2354@gmail.com">
                      <Button variant="link">arya.patel2354@gmail.com</Button>
                    </a>
                  </HoverCardTrigger>
                </HoverCard>
              </div>
            </div>
            <div className="flex items-center space-x mb-2">
              <a
                href="https://www.instagram.com/arya.p05/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="button" size="sm" className="px-3">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <div className="flex gap-2">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://www.instagram.com/arya.p05/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">arya.p05</Button>
                    </a>
                  </HoverCardTrigger>
                </HoverCard>
              </div>
            </div>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default photography;
