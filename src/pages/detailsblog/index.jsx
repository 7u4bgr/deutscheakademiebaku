import React, { useMemo } from "react";
import styles from './index.module.css'
import { useParams } from "react-router-dom";
import IshalPhoto from '../../assets/images/ishal.png'
import Diyabet from '../../assets/images/diyabet.webp'
import Astim from '../../assets/images/astim.jpg'
import Kalp from '../../assets/images/kalp.jpg'
import Cilt from '../../assets/images/cilt.jpg'
import Covid from '../../assets/images/covid.jpg'
import Iyne from '../../assets/images/iyne.jpg'
import Iltihap from '../../assets/images/iltihap.webp'
import Idrar from '../../assets/images/idrar.jpg'
import Wrapper from '../../components/UI/wrapper'
import { GarantieIcon } from "../../icons";
const Details = () => {
    const { id } = useParams(); // URL'deki id'yi al
    const photos = useMemo(
        () => [
            {
                id: 1,
                image: `${IshalPhoto}`,
                text: "İshal Durumunda Neler Yapılmalı?",
                textTwo: "Günlük yaşamı olumsuz etkileyen mide ve bağırsak sorunları arasında yer alan ishal, hem yetişkinlerde hem çocuklarda en çok görülen bulaşıcı hastalıklardan biridir. İshal, bireyin tuvalete çıkma sıklığını artırıp vücudun sıvı ve mineral dengesini de bozabilir. Bu nedenle ishale yol açan faktörleri ve ishalden korunma yollarını bilmek büyük önem taşır. İçeriğimizde İshal nedir?, İshal türleri nelerdir? ve İshal tedavisi nasıl olur? gibi merak edilen soruların yanıtlarını bulabilirsiniz.",
                headerText: "İshal Nedir? İshal Türleri Nelerdir? ",
                aboutHeaderText: "İshal, bağırsak hareketi sırasında gevşek ve sulu dışkılamaya neden olan, genellikle bir veya iki gün içerisinde kendiliğinden geçen bir sağlık problemidir. Yaygın bir sağlık problemi olan ishal hemen her yaştan insanı etkileyebilen ve vücutta su kaybına yol açan bir durumdur. İnsanlar yıl içerisinde pek çok kez bu sağlık problemini yaşayabilirler. Ancak ishal özellikle bebekler ve çocuklar için daha ciddi bir sağlık sorunu olabilir. ",
                typeHeaderText: "İshalin farklı türleri bulunur. Bunlar şu şekilde sıralanabilir:",
                oneTypeHeader: "Akut İshal (Kısa Süreli İshal):",
                aboutOneTypeHeader: "1 veya 2 gün süren ve herhangi bir tedavi gerektirmeden kendiliğinden geçen ishal türüdür. En yaygın ishal türü olan akut ishal genellikle bakteriyel bir enfeksiyon nedeniyle, güvenli olmayan yiyecek ya da su tüketiminden kaynaklanabilir.",
                twoTypeHeader: "Sürekli İshal:",
                aboutTwoTyperHeader: "Yaklaşık iki ila dört hafta süren ishal türüdür.",
                threeTypeHeader: "Kronik İshal (Uzun Süreli İshal):",
                aboutThreeTypeHeader: "Dört haftadan uzun süren ishal türüdür. Kronik ishal ciddi bir sağlık probleminden kaynaklanıyor olabilir ve özel bir tedavi gerektirebilir.",
                forKind: "Çocuklarda ve Bebeklerde İshal",
                aboutKind: "İshal durumunda bebeklere sıvı vermeye devam edilmesi elzemdir. Bebek eğer mamayla besleniyorsa normalden daha sık beslenmesi sağlanmalıdır. Anne sütüyle besleniyorsa da bebeğe daha sık süt verilmelidir. Bebeklerde ishalin yaklaşık iki hafta kadar sürebileceği de unutulmamalıdır.İshal çoğu zaman tedaviye ihtiyaç olmadan kendiliğinden geçen bir rahatsızlık olsa da bazı durumlarda tıbbi yardım almak gerekebilir. ",
                whyIshal: "İshal Neden Olur?",
                aboutIshal: "İshalin başlıca nedenleri: Crohn hastalığı ve ülseratif kolit gibi bağırsak hastalıkları, bakteriyel enfeksiyonlar, virüsler, bazı gıdalara karşı alerjiler, temiz olmayan gıdalar veya sulardaki bakteriler, gıda intoleransı (bazı besinleri sindirmede zorlanma), bazı kanser türleri, antibiyotik kullanımı ve bazı kanser ilaçları, mide veya safra kesesi ameliyatı, hipertiroidizm, bazı besin maddelerinin emiliminde sorun yaşama (malabsorpsiyon), huzursuz bağırsak sendromu.",
                beshil: "İshal Yapan Besinler Nelerdir?",
                aboutBeshil: "Süt ve süt ürünleri, baharatlı ve acı yiyecekler, işlenmiş gıdalar, brokoli, lahana, ıspanak, karnabahar gibi sebzeler, kahve ve kafein içeren gıdalar, kızartılmış ve yağlı besinler, alkol, şekerli ürünler ishale yol açabilir.",
                textBeshil: "Bu besinlerin yanı sıra yemekleri hızlı bir şekilde yemek ve fruktoz içeren meyveleri aşırı tüketmek de ishale neden olabilir. Özellikle fruktoz hassasiyeti olan bireylerin gaz, şişkinlik ve ishal gibi sorunlar yaşamamak için meyve tüketiminde daha dikkatli olmaları büyük önem taşır."



            },
            {
                id: 2,
                image: `${Diyabet}`,
                text: "Diyabet (Şeker Hastalığı)",
                textTwo: "Diyabet, vücudun yeterli insülin üretmemesi veya insülini etkili kullanamaması nedeniyle kan şekerinin yükselmesi durumudur. Diyabet, tip 1 ve tip 2 olmak üzere iki ana türde görülür ve tedavi edilmediğinde ciddi sağlık sorunlarına yol açabilir.",
                headerText: "Diyabet Nedir? Diyabetin Türleri Nelerdir?",
                aboutHeaderText: "Diyabet, insülinin ya yetersiz üretildiği ya da vücut tarafından etkili bir şekilde kullanılmadığı bir hastalıktır. Tip 1 diyabet, genellikle çocukluk döneminde başlar ve vücut insülin üretmez. Tip 2 diyabet ise genellikle yetişkinlerde görülür ve insülin direnci ile başlar.",
                typeHeaderText: "Diyabetin Türleri:",
                oneTypeHeader: "Tip 1 Diyabet:",
                aboutOneTypeHeader: "Tip 1 diyabet, pankreasın insülin üretmemesi nedeniyle oluşur. Genellikle çocuklukta veya genç yaşlarda görülür.",
                twoTypeHeader: "Tip 2 Diyabet:",
                aboutTwoTyperHeader: "Tip 2 diyabet, vücudun insüline karşı direnç gösterdiği ve pankreasın yeterli insülin üretemediği bir durumdur. Genellikle yaşla birlikte artar ve obezite ile ilişkilidir.",
                forKind: "Diyabetin Belirtileri",
                aboutKind: "Aşırı susuzluk, sık idrara çıkma, yorgunluk, bulanık görme, açlık hissi gibi belirtiler diyabetin yaygın belirtileridir. Bu belirtiler görülüyorsa bir doktora başvurulmalıdır.",
                whyIshal: "Diyabet Neden Olur?",
                aboutIshal: "Genetik faktörler, aşırı kilo, kötü beslenme alışkanlıkları ve hareketsiz yaşam tarzı gibi nedenler diyabetin başlıca sebeplerindendir.",
                beshil: "Diyabetle İlgili Beslenme",
                aboutBeshil: "Diyabeti yönetmek için sağlıklı, dengeli bir diyet çok önemlidir. Özellikle kan şekerini dengelemeye yardımcı olan düşük glisemik indeksli yiyecekler tercih edilmelidir.",
                textBeshil: "Meyveler, sebzeler, tam tahıllar ve sağlıklı yağlar, diyabet hastaları için uygun besinlerdir. Şekerli gıdalardan, işlenmiş yiyeceklerden ve aşırı tuzlu gıdalardan kaçınılmalıdır."
            },
            {
                id: 3,
                image: `${Astim}`,
                text: "Astım",
                textTwo: "Astım, hava yollarındaki iltihaplanma ve daralma nedeniyle nefes almayı zorlaştıran bir hastalıktır. Astım hastaları, özellikle bazı tetikleyicilere (toz, polen, soğuk hava vb.) maruz kaldıklarında nefes darlığı, öksürük ve hırıltı gibi şikayetler yaşayabilir.",
                headerText: "Astım Nedir? Astımın Belirtileri",
                aboutHeaderText: "Astım, kronik bir akciğer hastalığı olup, hava yollarının daralmasına ve tıkanmasına neden olur. Bu durum, nefes alma güçlüğü, öksürük ve hırıltıya yol açar.",
                typeHeaderText: "Astımın Tetikleyicileri:",
                oneTypeHeader: "Alerjenler:",
                aboutOneTypeHeader: "Polen, toz, evcil hayvan tüyleri gibi alerjenler astım ataklarını tetikleyebilir.",
                twoTypeHeader: "Hava Kirliliği ve Soğuk Hava:",
                aboutTwoTyperHeader: "Kirli hava, egzoz dumanı ve soğuk hava astımın kötüleşmesine neden olabilir.",
                forKind: "Astımın Tedavisi",
                aboutKind: "Astım tedavisi, ilaçlar ve yaşam tarzı değişiklikleri ile kontrol altına alınabilir. Astım ilaçları genellikle bronkodilatörler ve kortikosteroidler içerir.",
                whyIshal: "Astım Neden Olur?",
                aboutIshal: "Genetik faktörler ve çevresel faktörler astıma neden olabilir. Alerjiler, hava kirliliği ve sigara dumanı astım ataklarını tetikleyebilir.",
                beshil: "Astımın Yönetimi",
                aboutBeshil: "Astım hastalarının alerjenlerden kaçınması, düzenli egzersiz yapması ve doktor tarafından önerilen ilaçları kullanması önemlidir.",
                textBeshil: "Astım hastalarının düzenli olarak akciğer fonksiyonlarını kontrol ettirmesi ve tetikleyicilerden uzak durması gerekir."
            },
            {
                id: 4,
                image: `${Kalp}`,
                text: "Kalp Yetmezliği",
                textTwo: "Kalp yetmezliği, kalbin vücuda yeterince kan pompalayamadığı bir durumdur. Bu hastalık, kalbin sol veya sağ karıncığının düzgün çalışmaması sonucu ortaya çıkar ve vücutta sıvı birikimine yol açabilir.",
                headerText: "Kalp Yetmezliği Nedir? Belirtileri Nelerdir?",
                aboutHeaderText: "Kalp yetmezliği, kalbin pompalama gücünün zayıflaması sonucu meydana gelir. Kalp, yeterince oksijen ve besin maddesi taşıyamaz, bu da vücutta sıvı birikimine ve şişmelere yol açabilir.",
                typeHeaderText: "Kalp Yetmezliğinin Türleri:",
                oneTypeHeader: "Sol Kalp Yetmezliği:",
                aboutOneTypeHeader: "Sol kalp yetmezliği, kanın akciğerlere yeterince pompalanamaması sonucu nefes darlığına yol açar.",
                twoTypeHeader: "Sağ Kalp Yetmezliği:",
                aboutTwoTyperHeader: "Sağ kalp yetmezliği, vücuttaki organlara kanın yeterince pompalanamamasına neden olur ve ödemle sonuçlanabilir.",
                forKind: "Kalp Yetmezliği Belirtileri",
                aboutKind: "Nefes darlığı, yorgunluk, ödem, hızlı kilo alımı gibi belirtiler kalp yetmezliğinin yaygın işaretlerindendir.",
                whyIshal: "Kalp Yetmezliği Neden Olur?",
                aboutIshal: "Yüksek tansiyon, koroner arter hastalığı, kalp krizi ve aşırı alkol tüketimi kalp yetmezliğine yol açabilir.",
                beshil: "Kalp Yetmezliği Tedavisi",
                aboutBeshil: "Kalp yetmezliğinin tedavisi, ilaç tedavisi, yaşam tarzı değişiklikleri ve bazen cerrahi müdahaleleri içerir.",
                textBeshil: "Kalp yetmezliği olan hastaların düzenli olarak doktor kontrolüne gitmesi ve önerilen tedavi yöntemlerine uyması önemlidir."
            },
            {
                id: 5,
                image: `${Cilt}`,
                text: "Cilt Lekeleri ve Yorgunluk",
                textTwo: "Cilt lekeleri, güneş ışınları, yaşlanma, hormonsal değişiklikler veya cilt hastalıkları nedeniyle meydana gelebilir. Yorgunluk ise genellikle stres, uyku eksikliği ve aşırı çalışma sonucu oluşan bir durumdur.",
                headerText: "Cilt Lekeleri ve Yorgunluk Nedir?",
                aboutHeaderText: "Cilt lekeleri, ciltte renk değişikliklerine neden olan bölgelerdir. Yorgunluk ise bedensel ve zihinsel çöküş halidir.",
                typeHeaderText: "Cilt Lekelerinin Nedenleri:",
                oneTypeHeader: "Güneş Işığı",
                aboutOneTypeHeader: "Aşırı güneşe maruz kalmak ciltte lekelerin oluşmasına yol açabilir.",
                twoTypeHeader: "Yaşlanma ve Hormonlar",
                aboutTwoTyperHeader: "Yaşlanma ile birlikte hormonel değişiklikler ciltte lekelere neden olabilir.",
                forKind: "Yorgunluk ve İyi Uyku",
                aboutKind: "Yorgunluk, vücutta dinlenmeye ihtiyaç duyulduğunun bir işaretidir. İyi uyku, yorgunlukla başa çıkmanın en etkili yoludur.",
                whyIshal: "Cilt Lekeleri ve Yorgunluk Neden Olur?",
                aboutIshal: "Aşırı güneşe maruz kalma, stres, yetersiz uyku ve sağlıksız yaşam alışkanlıkları cilt lekelerine ve yorgunluğa yol açabilir.",
                beshil: "Yorgunluğu Azaltma Yöntemleri",
                aboutBeshil: "Düzenli egzersiz, sağlıklı beslenme ve iyi uyku yorgunluğu azaltmaya yardımcı olabilir.",
                textBeshil: "Cilt lekelerinden korunmak için güneş kremi kullanmak, cilt temizliğine dikkat etmek önemlidir."
            },
            {
                id: 6,
                image: `${Covid}`,
                text: "Covid-19 (PCR Testi)",
                textTwo: "Covid-19, dünya çapında pandemiye yol açmış bir viral enfeksiyondur. Genellikle soğuk algınlığı belirtileriyle başlar, ancak hızla ciddi solunum yolu hastalıklarına, organ yetmezliğine ve ölüme yol açabilir. PCR testi, Covid-19'un tespiti için en güvenilir yöntemlerden biridir.",
                headerText: "Covid-19 Nedir?",
                aboutHeaderText: "Covid-19, SARS-CoV-2 virüsünün neden olduğu bir hastalıktır. Dünya genelinde milyonlarca insanı etkileyen bu hastalık, çoğunlukla solunum yolu enfeksiyonlarına yol açar.",
                typeHeaderText: "Covid-19'un Nedenleri:",
                oneTypeHeader: "Virüs Bulaşma",
                aboutOneTypeHeader: "Covid-19, genellikle öksürme, hapşırma veya konuşma yoluyla hava yoluyla yayılır.",
                twoTypeHeader: "Asemptomatik Bulaş",
                aboutTwoTyperHeader: "Covid-19, asemptomatik kişilerin virüsü yayma potansiyeline sahip olması nedeniyle zor kontrol edilir.",
                forKind: "Covid-19'dan Korunma",
                aboutKind: "Sosyal mesafe, maske takma ve ellerin sık sık yıkanması, Covid-19'dan korunmak için temel önlemlerdir.",
                whyIshal: "Covid-19'un Başlıca Nedenleri",
                aboutIshal: "Covid-19, hava yoluyla bulaşır ve bu hastalık genellikle yakın temas ve virüs taşıyan yüzeylerle etkileşim sonucu yayılır.",
                beshil: "Covid-19'dan Korunma Yöntemleri",
                aboutBeshil: "Aşı olmak, sık sık elleri yıkamak, kalabalık ortamlardan kaçınmak ve yüz maskesi kullanmak Covid-19'dan korunmanın başlıca yollarıdır.",
                textBeshil: "PCR testi, Covid-19'un tespiti için en yaygın kullanılan ve en güvenilir test yöntemidir."
            },
            {
                id: 7,
                image: `${Iyne}`,
                text: "Enjeksiyon (iğne)",
                textTwo: "Enjeksiyonlar, genellikle ilaçların veya aşıların doğrudan vücuda verilmesini sağlayan bir tıbbi işlemdir. Bu işlem, vücudun hızlı bir şekilde tedavi edilmesini sağlamak amacıyla yapılır.",
                headerText: "Enjeksiyon Nedir?",
                aboutHeaderText: "Enjeksiyon, bir iğne aracılığıyla vücuda sıvıların (ilacın veya aşıların) verilmesi işlemidir. Bu işlem, damar içine, kas içine veya deri altına yapılabilir.",
                typeHeaderText: "Enjeksiyon Türleri:",
                oneTypeHeader: "Damar İçi Enjeksiyon",
                aboutOneTypeHeader: "Bu tür enjeksiyonlar, ilaçların doğrudan kana verilmesi amacıyla yapılır. Genellikle hastanelerde kullanılır.",
                twoTypeHeader: "Kas İçi Enjeksiyon",
                aboutTwoTyperHeader: "Kas içine yapılan enjeksiyonlar, genellikle aşılar ve bazı ilaçlar için tercih edilir.",
                forKind: "Enjeksiyonun Faydaları",
                aboutKind: "Enjeksiyonlar, ilaçların hızla vücuda girmesini sağlayarak hızlı bir tedavi süreci sunar.",
                whyIshal: "Enjeksiyonların Kullanım Amaçları",
                aboutIshal: "Enjeksiyonlar, ilacın hızlı bir şekilde vücuda alınmasını sağlamak, aşıları yapmak ve bazı hastalıkları tedavi etmek için kullanılır.",
                beshil: "Enjeksiyonun Riskleri",
                aboutBeshil: "Enjeksiyonlar, enfeksiyon, kanama ve alerjik reaksiyon gibi riskler taşır. Bu nedenle enjeksiyon işlemi yapılmadan önce dikkatli bir değerlendirme yapılmalıdır.",
                textBeshil: "Enjeksiyonun doğru bir şekilde yapılması, komplikasyonların önlenmesine yardımcı olabilir."
            },
            {
                id: 8,
                image: `${Iltihap}`,
                text: "İleri Derece İltihaplanmalar",
                textTwo: "İleri derecede iltihaplanmalar, vücudun bağışıklık sistemi tarafından anormal şekilde tetiklenen ve uzun süre devam eden inflamasyonlardır. Romatizma, otoimmün hastalıklar ve bazı enfeksiyonlar bu durumu tetikleyebilir.",
                headerText: "İleri Derece İltihaplanmalar Nedir?",
                aboutHeaderText: "İleri derecedeki iltihaplanmalar, vücudun savunma mekanizmasının aşırı çalışması sonucu oluşan, şiddetli ve uzun süren inflamasyonlardır.",
                typeHeaderText: "İleri Derece İltihaplanmaların Nedenleri:",
                oneTypeHeader: "Romatizmal Hastalıklar",
                aboutOneTypeHeader: "Romatizmal hastalıklar, bağışıklık sisteminin kendi dokularına saldırmasına neden olarak iltihaplanmalara yol açar.",
                twoTypeHeader: "Otoimmün Hastalıklar",
                aboutTwoTyperHeader: "Otoimmün hastalıklar, bağışıklık sisteminin yanlışlıkla sağlıklı hücrelere saldırmasına ve iltihaplanmaya neden olur.",
                forKind: "Tedavi Yöntemleri",
                aboutKind: "Tedavi, iltihabın nedenine bağlı olarak değişir. Antiinflamatuar ilaçlar, bağışıklık sistemini baskılayıcı tedaviler ve bazı durumlarda cerrahi müdahale gerekebilir.",
                whyIshal: "İleri Derece İltihaplanmanın Belirtileri",
                aboutIshal: "Ağrı, şişlik, sıcaklık artışı ve kızarıklık, iltihaplanmaların başlıca belirtileridir.",
                beshil: "İleri Derece İltihaplanmalara Karşı Alınacak Önlemler",
                aboutBeshil: "Sağlıklı yaşam tarzı, düzenli egzersiz ve dengeli beslenme, iltihaplanmanın önlenmesine yardımcı olabilir.",
                textBeshil: "İleri derecedeki iltihaplanmaların tedavisi zaman alabilir ve genellikle ilaç tedavisi gerektirir."
            },
            {
                id: 9,
                image: `${Idrar}`,
                text: "İdrar Yolu Problemleri",
                textTwo: "İdrar yolu problemleri, idrarın doğru şekilde atılamaması durumunda ortaya çıkar. İdrar yolu enfeksiyonları, taşlar ve mesane problemleri gibi durumlar yaygındır.",
                headerText: "İdrar Yolu Problemleri Nedir?",
                aboutHeaderText: "İdrar yolu problemleri, idrarın mesaneden düzgün şekilde atılmaması ve idrar yolu enfeksiyonları gibi durumları içerir.",
                typeHeaderText: "İdrar Yolu Problemlerinin Nedenleri:",
                oneTypeHeader: "İdrar Yolu Enfeksiyonları",
                aboutOneTypeHeader: "İdrar yolu enfeksiyonları, bakterilerin idrar yolunda çoğalması sonucu meydana gelir. Bu durum genellikle ağrı, yanma ve sık idrara çıkma ile kendini gösterir.",
                twoTypeHeader: "Mesane Taşları",
                aboutTwoTyperHeader: "Mesane taşları, idrarda biriken minerallerin katılaşması sonucu oluşur. Bu taşlar idrarın düzgün atılmasını engelleyebilir.",
                forKind: "İdrar Yolu Problemleri Tedavisi",
                aboutKind: "Tedavi, enfeksiyonlara karşı antibiyotik tedavisi veya taşların cerrahi olarak çıkarılması gibi yöntemleri içerebilir.",
                whyIshal: "İdrar Yolu Problemleri Neden Olur?",
                aboutIshal: "İdrar yolu problemleri, bakteriyel enfeksiyonlar, yetersiz sıvı alımı, mesane tıkanıklıkları veya taşlar gibi nedenlerle oluşabilir.",
                beshil: "İdrar Yolu Problemlerine Karşı Alınacak Önlemler",
                aboutBeshil: "Düzenli su içmek, hijyen kurallarına uymak ve sık sık tuvalete gitmek, idrar yolu problemlerinin önlenmesine yardımcı olabilir.",
                textBeshil: "İdrar yolu problemleri tedavi edilmediğinde böbrek enfeksiyonlarına ve daha ciddi sağlık sorunlarına yol açabilir."
            }
            
            

        ],
        []
    );


    const photo = photos.find((item) => item.id === Number(id));

    if (!photo) {
        return <p>Bilgi bulunamadı</p>;
    }

    return (
        <div className={styles.background}>
            <Wrapper>
                <div className={styles.images}>
                    <div className={styles.imageWrapper}>
                        <img src={photo.image} alt="" />
                    </div>
                    <h2>{photo.text}</h2>
                </div>
                <div className={styles.textTwoBack}>
                    <p>{photo.textTwo}</p>
                </div>
                <div className={styles.headerText}>
                    <h1>{photo.headerText}</h1>
                    <p>{photo.aboutHeaderText}</p>
                    <h2>{photo.typeHeaderText}</h2>
                    <h3>{photo.oneTypeHeader} <h2>{photo.aboutOneTypeHeader}</h2>  </h3>
                    <h3>{photo.twoTypeHeader} <h2>{photo.aboutTwoTyperHeader}</h2>  </h3>
                    <h3>{photo.threeTypeHeader} <h2>{photo.aboutThreeTypeHeader}</h2>  </h3>
                    <h3>{photo.forKind}</h3>
                    <p>{photo.aboutKind}</p>
                    <h3>{photo.whyIshal}</h3>
                    <p>{photo.aboutIshal}</p>
                    <h3>{photo.beshil}</h3>
                    <p>{photo.aboutBeshil}</p>
                    <p>{photo.textBeshil}</p>
                </div>
                <div className={styles.garantie}>
                    <div className={styles.controlGarantie}>
                        <button><GarantieIcon /> Onaylanmış İçerik </button>
                        <h1>Verdiğimiz Bilgilere Güvenebilirsiniz</h1>
                        <h2>Bu içerik Eternal Sağlık tarafından onaylanmıştır. Tıbbi Yayın Kurulumuz, sağlık alanında güvenilir bilgiye erişim sağlamak amacıyla oluşturulmuş deneyimli doktor ve araştırmacılardan oluşan bir ekiptir.</h2>
                    </div>
                </div>

            </Wrapper>
        </div>
    );
};

export default Details;
