export type DocumentType = "terms" | "privacy";

export interface SystemDoc {
  type: DocumentType;
  label: string;
  sections: { title: string; content: string }[];
  lastUpdated: string;
}

export interface SystemData {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  icon: string;
  description: string;
  lastUpdated: string;
  docs: Record<DocumentType, SystemDoc>;
}

export const systems: SystemData[] = [
  // ─────────────────────────────────────────────────────────────
  // Pronto! Portal de Serviços
  // ─────────────────────────────────────────────────────────────
  {
    id: "pronto-portal",
    name: "Agrotins+",
    category: "servicos",
    categoryLabel: "SERVIÇOS",
    icon: "Globe",
    description:
      "Guia oficial da Feira de Tecnologia Agropecuária do Tocantins com programação, mapa interativo, notícias e informações sobre expositores.",
    lastUpdated: "25/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "25/03/2026",
        sections: [
          {
            title: "Aceitação",
            content:
              "Ao utilizar a aplicação Agrotins, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso. O acesso aos serviços digitais da feira está condicionado à observância das regras aqui estabelecidas.",
          },
          {
            title: "Identificação do Controlador",
            content:
              "Órgão Responsável: Agência de Tecnologia da Informação do Tocantins (ATI). CNPJ: 32.893.926/0001-40. Endereço: Quadra 103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, 77.001-020, Palmas-TO. Contato Oficial: contato@ati.to.gov.br.",
          },
          {
            title: "Descrição do Serviço",
            content:
              "A aplicação funciona como o guia oficial da Feira de Tecnologia Agropecuária do Tocantins (Agrotins). O sistema permite consultar a programação completa de eventos, incluindo palestras e clínicas tecnológicas; visualizar o mapa interativo do parque para localização de estandes e serviços; acessar notícias atualizadas sobre o agronegócio e o evento; e localizar expositores e obter informações de utilidade pública sobre a feira.",
          },
          {
            title: "Cadastro e Segurança",
            content:
              "O usuário deve fornecer informações exatas e atualizadas, sob pena de responsabilidade administrativa e civil. A conta é pessoal e intransferível. O usuário é o único responsável por manter a confidencialidade de suas credenciais de acesso. O acesso pode ser realizado via CPF e senha cadastrada ou através de autenticação por contas de terceiros (Google/Apple), conforme as telas de login do sistema.",
          },
          {
            title: "Uso Permitido e Conduta",
            content:
              "É estritamente proibida a utilização da aplicação para prática de atos ilícitos ou contrários à moralidade pública; inserção de dados falsos ou tentativa de fraude contra a administração pública; ações que visem comprometer a integridade tecnológica dos sistemas do Estado, como hacking, engenharia reversa ou ataques de negação de serviço; e qualquer tentativa de acesso não autorizado aos sistemas da Administração Pública Estadual.",
          },
          {
            title: "Propriedade Intelectual",
            content:
              "Todo o conteúdo, incluindo logotipos, códigos-fonte, designs e textos, é de propriedade exclusiva do Estado do Tocantins, sendo protegido pelas leis de direito autoral e propriedade intelectual.",
          },
          {
            title: "LGPD - Dados Pessoais",
            content:
              "Dados coletados: nome completo, CPF, e-mail, telefone e credenciais de acesso. Finalidade: identificação do usuário, personalização da agenda de eventos, envio de informativos sobre a feira e viabilização das funcionalidades do mapa. Base legal: execução de políticas públicas, cumprimento de obrigação legal e legítimo interesse. Direitos do usuário: o usuário pode solicitar acesso, correção ou exclusão de seus dados através do e-mail oficial de contato.",
          },
          {
            title: "Responsabilidade e Suspensão",
            content:
              "A administração pública busca garantir a disponibilidade contínua do serviço, porém não se responsabiliza por interrupções decorrentes de falhas técnicas externas ou manutenção programada. O acesso do usuário poderá ser suspenso ou cancelado imediatamente em caso de violação destes termos. Contas que violarem estas normas poderão ser suspensas ou encerradas sem aviso prévio. A ATI adota medidas de segurança para proteger o sistema, porém a aplicação é fornecida \"como está\".",
          },
          {
            title: "Legislação e Foro",
            content:
              "Estes Termos são regidos pela legislação brasileira, em especial a Lei nº 14.129/2021 (Governo Digital). Fica eleito o foro da comarca de Palmas/TO para dirimir quaisquer controvérsias.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "25/03/2026",
        sections: [
          {
            title: "Introdução",
            content:
              "Esta Política descreve como a Agência de Tecnologia da Informação do Tocantins (ATI) trata os dados pessoais dos usuários da aplicação Agrotins, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).",
          },
          {
            title: "Dados Coletados",
            content:
              "Para o funcionamento adequado da aplicação, são coletados dados de identificação, como nome, CPF e endereço de e-mail; dados de comunicação, como número de telefone celular; e dados de uso, como localização em tempo real para navegação no mapa do evento e registros de acesso (logs).",
          },
          {
            title: "Finalidade do Tratamento",
            content:
              "Os dados coletados são utilizados para autenticação segura do usuário no aplicativo, gerenciamento da programação personalizada de palestras e eventos escolhidos pelo usuário, navegação dentro do Parque Agrotins através do mapa digital e envio de comunicações relevantes sobre a feira e segurança do usuário.",
          },
          {
            title: "Compartilhamento de Dados",
            content:
              "O compartilhamento de dados ocorre prioritariamente entre órgãos e entidades da Administração Pública Estadual, visando a execução de políticas públicas e a interoperabilidade de sistemas, sempre respeitando os limites da lei.",
          },
          {
            title: "Base Legal",
            content:
              "O tratamento de dados é realizado com base na execução de serviço público, cumprimento de obrigação legal e no legítimo interesse da administração pública em fomentar o setor agropecuário do Estado.",
          },
          {
            title: "Compartilhamento e Retenção",
            content:
              "Os dados poderão ser compartilhados com a Secretaria da Agricultura e Pecuária (SEAGRO) para fins de gestão do evento e estatísticas de participação, vedada a comercialização dessas informações. Os dados são armazenados pelo tempo necessário para cumprir as finalidades descritas ou conforme prazos legais de guarda documental.",
          },
          {
            title: "Direitos do Titular",
            content:
              "Em conformidade com a LGPD, o usuário tem direito ao acesso, correção, exclusão, portabilidade e revogação do consentimento. Para exercer esses direitos, o contato deve ser feito via e-mail: contato@ati.to.gov.br.",
          },
          {
            title: "Segurança",
            content:
              "A ATI utiliza protocolos de proteção e medidas técnicas administrativas para manter os dados seguros e evitar acessos não autorizados ou situações acidentais de destruição ou perda.",
          },
          {
            title: "Exclusão da Conta",
            content:
              "A exclusão da conta pode ser realizada diretamente pelo aplicativo: acesse sua conta no app, vá até as configurações de perfil, selecione a opção \"Excluir conta\" e confirme a exclusão. Ao excluir sua conta, serão removidos dados de cadastro, informações associadas à conta e dados de favoritos e registros vinculados ao usuário. Alguns dados podem ser mantidos temporariamente por até 30 dias para fins legais ou de segurança. Caso tenha dificuldades, entre em contato pelo e-mail contato@ati.to.gov.br.",
          },
          {
            title: "Alterações",
            content:
              "Esta Política de Privacidade poderá ser atualizada periodicamente. A data da última atualização estará sempre visível no topo deste documento.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Central de Ajuda (CAx)
  // ─────────────────────────────────────────────────────────────
  {
    id: "cax",
    name: "Censo Aquícola",
    category: "servicos",
    categoryLabel: "SERVIÇOS",
    icon: "MessageCircle",
    description:
      "Solução digital para coleta, validação, consolidação e análise de informações da atividade aquícola no Tocantins.",
    lastUpdated: "24/04/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "24/04/2026",
        sections: [
          {
            title: "Aceitação",
            content:
              "Ao utilizar a aplicação Censo Aquícola, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso. O acesso às funcionalidades digitais da aplicação está condicionado à observância das regras aqui estabelecidas. A utilização da aplicação implica concordância com as condições de uso, com as regras de segurança, com as finalidades de tratamento de dados pessoais e com as responsabilidades previstas neste documento.",
          },
          {
            title: "Identificação do Controlador",
            content:
              "Órgão Responsável: Agência de Tecnologia da Informação do Tocantins (ATI). CNPJ: 32.893.926/0001-40. Endereço: Quadra 103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, 77.001-020, Palmas-TO. Contato Oficial: contato@ati.to.gov.br. Caso o projeto seja operado em conjunto com outro órgão estadual responsável pela política aquícola, recomenda-se inserir também a identificação do órgão gestor do Censo Aquícola e seu canal oficial de atendimento.",
          },
          {
            title: "Descrição do Serviço",
            content:
              "A aplicação Censo Aquícola é uma solução tecnológica integrada destinada à realização do Censo Aquícola no Estado do Tocantins, substituindo processos manuais por um sistema digital composto por aplicativo móvel e plataforma web. O sistema apoia a coleta estruturada, organização, validação, consolidação e análise de informações da atividade aquícola, contribuindo para dados confiáveis e estratégicos para políticas públicas e desenvolvimento sustentável da aquicultura.",
          },
          {
            title: "Funcionalidades",
            content:
              "A aplicação permite, conforme o perfil de acesso, realizar cadastro e autenticação; coletar dados sobre unidades produtivas, produtores, empreendimentos, espécies cultivadas, infraestrutura, produção, manejo e comercialização; registrar fotografias para comprovação, fiscalização, validação ou documentação técnica; utilizar georreferenciamento; operar em modo offline com posterior sincronização; acessar plataforma web de gestão; visualizar dashboards, indicadores, mapas e relatórios; e apoiar a tomada de decisão e formulação de políticas públicas.",
          },
          {
            title: "Perfis de Usuário e Níveis de Acesso",
            content:
              "O acesso às funcionalidades poderá variar conforme o perfil do usuário e as permissões definidas pela administração pública. Poderão existir perfis de recenseador, supervisor, gestor, administrador, analista ou usuário institucional. Cada usuário deverá utilizar a aplicação apenas para finalidades compatíveis com seu perfil, atribuições e autorização de acesso.",
          },
          {
            title: "Cadastro e Segurança",
            content:
              "O usuário deve fornecer informações exatas, completas e atualizadas, sob pena de responsabilidade administrativa, civil e penal, quando aplicável. A conta de acesso é pessoal e intransferível. O usuário é responsável por manter a confidencialidade de credenciais, senhas, tokens ou demais mecanismos de autenticação, e deverá comunicar imediatamente qualquer suspeita de uso indevido, perda de credenciais, acesso não autorizado, falha de segurança ou inconsistência relevante.",
          },
          {
            title: "Uso Permitido e Conduta",
            content:
              "A aplicação deverá ser utilizada exclusivamente para as finalidades relacionadas ao Censo Aquícola e às atividades institucionais autorizadas. É proibida a prática de atos ilícitos, fraudulentos ou contrários ao interesse público; inserção, alteração, omissão ou manipulação intencional de dados falsos; registro de fotografias, coordenadas ou informações sem relação com o Censo; compartilhamento indevido de credenciais; acesso, coleta, cópia, divulgação ou uso não autorizado de dados; tentativas de comprometer sistemas do Estado; e uso para fins particulares, comerciais, político-partidários ou incompatíveis com a finalidade institucional.",
          },
          {
            title: "Coleta em Campo, Fotografias e Georreferenciamento",
            content:
              "Recursos de câmera, localização e armazenamento do dispositivo poderão ser necessários para coleta em campo, registro fotográfico, georreferenciamento e operação offline. Fotografias e coordenadas deverão estar diretamente relacionadas às finalidades do Censo Aquícola e poderão ser utilizadas para validação, auditoria, análise espacial, consolidação estatística, acompanhamento de políticas públicas e documentação técnica.",
          },
          {
            title: "Operação Offline e Sincronização",
            content:
              "A aplicação poderá permitir coleta e armazenamento temporário de dados em modo offline, para posterior sincronização com a base central quando houver conexão disponível. O usuário é responsável por sincronizar os dados coletados, conferir pendências indicadas pelo sistema e evitar exclusão, alteração indevida ou perda de informações antes do envio à base central.",
          },
          {
            title: "Propriedade Intelectual",
            content:
              "Todo o conteúdo da aplicação, incluindo logotipos, marcas institucionais, códigos-fonte, bases de dados, designs, textos, fluxos, relatórios, painéis, dashboards e demais elementos do sistema, é de propriedade exclusiva do Estado do Tocantins ou de seus respectivos titulares, sendo protegido pelas leis de direito autoral, propriedade intelectual e demais normas aplicáveis.",
          },
          {
            title: "LGPD - Dados Pessoais",
            content:
              "A aplicação poderá coletar dados como nome completo, CPF, e-mail, telefone, credenciais de acesso, órgão ou instituição de vínculo, perfil de usuário, registros de uso, dados técnicos do dispositivo, localização, fotografias, informações de coleta em campo e dados sobre unidades produtivas aquícolas. Os dados serão utilizados para identificação, autenticação, controle de acesso, execução do Censo, validação, georreferenciamento, estatísticas, dashboards, relatórios, auditoria, segurança da informação e formulação de políticas públicas. O tratamento poderá se basear na execução de políticas públicas, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, proteção do interesse público e demais hipóteses da LGPD.",
          },
          {
            title: "Compartilhamento e Direitos do Titular",
            content:
              "Os dados poderão ser compartilhados com órgãos e entidades da administração pública, parceiros institucionais e prestadores de serviço autorizados, quando necessário para execução, operação, fiscalização, auditoria, segurança, análise ou aprimoramento do Censo Aquícola. O titular poderá solicitar acesso, confirmação de tratamento, correção, atualização, anonimização, bloqueio, eliminação ou informações sobre compartilhamento, nos termos da legislação aplicável, pelo contato oficial indicado neste documento.",
          },
          {
            title: "Responsabilidade e Suspensão",
            content:
              "A administração pública busca garantir disponibilidade, segurança e adequado funcionamento da aplicação, mas não se responsabiliza por interrupções decorrentes de falhas técnicas externas, indisponibilidade de conexão, manutenção programada, caso fortuito, força maior, uso inadequado ou limitações dos dispositivos. O acesso poderá ser suspenso, limitado ou cancelado em caso de violação destes Termos, uso indevido, risco à segurança, suspeita de fraude, descumprimento de normas institucionais ou determinação de autoridade competente.",
          },
          {
            title: "Atualizações da Aplicação e dos Termos",
            content:
              "A aplicação Censo Aquícola poderá ser atualizada para correção de falhas, melhoria de funcionalidades, evolução tecnológica, adequação normativa, reforço de segurança ou atendimento a novas necessidades da administração pública. Estes Termos poderão ser alterados a qualquer momento mediante publicação da versão atualizada no ambiente oficial da aplicação. A continuidade de uso implicará ciência e concordância com a nova versão.",
          },
          {
            title: "Legislação e Foro",
            content:
              "Estes Termos são regidos pela legislação brasileira, em especial pela Lei nº 14.129/2021 (Governo Digital), Lei nº 13.709/2018 (LGPD), Lei nº 12.527/2011 (Lei de Acesso à Informação), Marco Civil da Internet e demais normas aplicáveis à administração pública, segurança da informação e proteção de dados pessoais. Fica eleito o foro da comarca de Palmas/TO para dirimir quaisquer controvérsias, ressalvadas as hipóteses legais de competência diversa.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "10/03/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve como a ATI trata os dados pessoais coletados por meio da Central de Ajuda (CAx), em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos nome, matrícula, e-mail institucional, setor, descrição do problema relatado e dados de interação com o sistema de chamados.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são utilizados para: registro e resolução de chamados, gestão de suporte técnico, geração de relatórios gerenciais e melhoria contínua dos serviços de TI.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento baseia-se no exercício de função pública e cumprimento de obrigações legais, conforme art. 7º da LGPD.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados dos chamados podem ser acessados por técnicos responsáveis e gestores de TI. Não há compartilhamento externo para fins comerciais.",
          },
          {
            title: "6. Segurança",
            content:
              "O acesso ao CAx é restrito por credenciais individuais. Todas as interações são registradas em log para fins de auditoria.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Servidores podem solicitar acesso ou correção dos seus dados pessoais registrados no sistema pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Ficha Nacional de Registro de Hóspedes
  // ─────────────────────────────────────────────────────────────
  {
    id: "ficha-hospedes",
    name: "Eu Pescador",
    category: "infraestrutura",
    categoryLabel: "INFRAESTRUTURA",
    icon: "Hotel",
    description:
      "Sistema digital para cadastro e registro de hóspedes em meios de hospedagem do estado.",
    lastUpdated: "02/04/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "02/04/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula o acesso e a utilização da Ficha Nacional de Registro de Hóspedes, sistema digital para cadastro de hóspedes em meios de hospedagem do Estado do Tocantins.",
          },
          {
            title: "2. Usuários do Sistema",
            content:
              "O sistema destina-se a estabelecimentos de hospedagem regularmente cadastrados junto aos órgãos competentes do Estado do Tocantins.",
          },
          {
            title: "3. Aceitação dos Termos",
            content:
              "Ao utilizar o sistema, o responsável pelo estabelecimento declara aceitar integralmente este Termo de Uso e a responsabilidade pela veracidade dos dados cadastrados.",
          },
          {
            title: "4. Obrigações do Usuário",
            content:
              "O estabelecimento é responsável por manter os dados dos hóspedes atualizados, precisos e em conformidade com as normas vigentes, bem como pela guarda segura das credenciais de acesso.",
          },
          {
            title: "5. Uso dos Dados",
            content:
              "Os dados inseridos poderão ser acessados pelas autoridades competentes para fins de segurança pública e controle sanitário, conforme legislação aplicável.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de alterar este Termo a qualquer momento. O uso continuado do sistema constitui aceitação dos novos termos.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "02/04/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento dos dados pessoais de hóspedes coletados por meio do sistema de Ficha Nacional de Registro de Hóspedes, em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "São coletados: nome completo, documento de identidade, CPF, nacionalidade, data de nascimento, endereço de residência, data de entrada e saída, e meio de transporte utilizado.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são coletados para cumprimento de obrigação legal dos meios de hospedagem, controle de segurança pública e gestão de estatísticas do setor de turismo.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se no cumprimento de obrigação legal a que o controlador está sujeito, conforme inciso II do art. 7º da LGPD.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Os dados podem ser acessados por autoridades de segurança pública, vigilância sanitária e turismo, conforme exigência legal.",
          },
          {
            title: "6. Segurança",
            content:
              "Adotamos medidas técnicas e administrativas para proteger os dados dos hóspedes contra acessos não autorizados ou uso indevido.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "O hóspede pode solicitar acesso, correção ou eliminação de seus dados pelo e-mail contato@ati.to.gov.br, respeitados os prazos legais de retenção.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Análise CAR
  // ─────────────────────────────────────────────────────────────
  {
    id: "analise-car",
    name: "Análise CAR",
    category: "infraestrutura",
    categoryLabel: "INFRAESTRUTURA",
    icon: "Map",
    description:
      "Sistema de análise do Cadastro Ambiental Rural para otimizar o uso da ferramenta para produtores rurais.",
    lastUpdated: "20/02/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "20/02/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula a utilização do sistema Análise CAR, ferramenta de análise do Cadastro Ambiental Rural destinada a produtores rurais e técnicos ambientais do Estado do Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao utilizar o sistema, o usuário declara ter lido, compreendido e aceitado integralmente as condições estabelecidas neste Termo de Uso.",
          },
          {
            title: "3. Requisitos de Acesso",
            content:
              "O acesso requer cadastro prévio com dados do imóvel rural e documentação pertinente. O usuário é responsável pela veracidade das informações fornecidas.",
          },
          {
            title: "4. Uso Permitido",
            content:
              "O sistema destina-se exclusivamente à análise e gestão de dados do CAR. É vedado o uso para fins comerciais não autorizados ou a inserção de dados falsos sobre imóveis rurais.",
          },
          {
            title: "5. Responsabilidade pelos Dados",
            content:
              "O usuário é integralmente responsável pela precisão dos dados geoespaciais e documentais inseridos no sistema.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de suspender acessos em caso de uso irregular. Este Termo pode ser atualizado a qualquer momento.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "20/02/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados pessoais e ambientais realizados pelo sistema Análise CAR, em conformidade com a LGPD e legislação ambiental vigente.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: dados cadastrais do produtor rural (nome, CPF/CNPJ, contato), dados geoespaciais do imóvel, documentação fundiária e histórico de análises.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são tratados para análise e validação do Cadastro Ambiental Rural, execução de políticas ambientais estaduais e geração de relatórios para órgãos competentes.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se na execução de políticas públicas ambientais e cumprimento de obrigações legais previstas no Código Florestal e legislação estadual.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados podem ser compartilhados com NATURATINS, SEMARH e demais órgãos ambientais competentes para execução de políticas públicas.",
          },
          {
            title: "6. Segurança",
            content:
              "Os dados geoespaciais e documentais são armazenados com criptografia e controle de acesso rigoroso, dado o seu caráter sensível para questões fundiárias.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "O produtor rural pode solicitar acesso ou correção de seus dados pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Levantamento Aquícola
  // ─────────────────────────────────────────────────────────────
  {
    id: "levantamento-avicola",
    name: "Levantamento Aquícola",
    category: "infraestrutura",
    categoryLabel: "INFRAESTRUTURA",
    icon: "FishSymbol",
    description:
      "Aplicativo para coleta e gestão de dados do levantamento aquícola no estado do Tocantins.",
    lastUpdated: "05/04/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "05/04/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula a utilização do aplicativo Levantamento Aquícola, ferramenta para coleta e gestão de dados do setor aquícola do Estado do Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao utilizar o aplicativo, o usuário declara ter lido e aceito integralmente este Termo de Uso.",
          },
          {
            title: "3. Usuários Autorizados",
            content:
              "O aplicativo destina-se a técnicos, pesquisadores e agentes públicos devidamente credenciados para a realização do levantamento aquícola estadual.",
          },
          {
            title: "4. Uso dos Dados Coletados",
            content:
              "Os dados inseridos no aplicativo são de propriedade do Estado do Tocantins e destinam-se exclusivamente a fins estatísticos e de políticas públicas para o setor aquícola.",
          },
          {
            title: "5. Obrigações do Usuário",
            content:
              "O usuário deve garantir a precisão dos dados coletados em campo e não divulgar informações confidenciais de produtores sem autorização.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de atualizar este Termo a qualquer momento. O uso continuado do aplicativo implica aceitação das alterações.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "05/04/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados pessoais coletados por meio do aplicativo Levantamento Aquícola, em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos dados dos produtores aquícolas (nome, CPF/CNPJ, contato, localização do empreendimento) e dados produtivos (espécies cultivadas, volumes, estruturas de produção).",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são utilizados para elaboração de estatísticas do setor aquícola tocantinense e formulação de políticas públicas para o desenvolvimento da aquicultura.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se na execução de políticas públicas e cumprimento de obrigação legal, conforme art. 7º da LGPD.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados agregados e anonimizados podem ser compartilhados com SEAGRO, ADAPEC e Ministério da Pesca para fins estatísticos e de gestão setorial.",
          },
          {
            title: "6. Segurança",
            content:
              "O aplicativo opera com sincronização segura e criptografada. O acesso é restrito aos agentes credenciados.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Produtores podem solicitar acesso aos seus dados registrados pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Sistema de Escalas
  // ─────────────────────────────────────────────────────────────
  {
    id: "sistema-escalas",
    name: "Sistema de Escalas",
    category: "servicos",
    categoryLabel: "SERVIÇOS",
    icon: "Calendar",
    description:
      "Sistema de gestão de escalas e plantões para servidores públicos do estado.",
    lastUpdated: "12/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "12/03/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula a utilização do Sistema de Escalas, ferramenta de gestão de escalas e plantões destinada a servidores públicos do Estado do Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao acessar o Sistema de Escalas, o servidor declara aceitar integralmente as condições deste Termo de Uso.",
          },
          {
            title: "3. Acesso ao Sistema",
            content:
              "O acesso é restrito a servidores públicos com cadastro ativo no sistema de RH do Estado, utilizando credenciais individuais e intransferíveis.",
          },
          {
            title: "4. Obrigações do Usuário",
            content:
              "O servidor deve manter suas informações funcionais atualizadas no sistema, confirmar ou solicitar alterações de escala dentro dos prazos estabelecidos e não compartilhar suas credenciais.",
          },
          {
            title: "5. Limitações de Responsabilidade",
            content:
              "A ATI não se responsabiliza por conflitos decorrentes de escalas geradas com base em informações incorretas fornecidas pelo servidor ou pela chefia imediata.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "Este Termo pode ser alterado a qualquer momento. O uso continuado do sistema constitui aceitação das alterações.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "12/03/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento dos dados funcionais de servidores coletados pelo Sistema de Escalas, em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: matrícula, nome, cargo, lotação, jornada de trabalho, registros de escalas e plantões, e eventuais justificativas de ausência.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são utilizados para gestão de escalas, controle de jornada, planejamento de pessoal e geração de relatórios gerenciais.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se no exercício de função pública e cumprimento de obrigações trabalhistas e administrativas previstas na legislação estadual.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados de escala podem ser acessados por gestores e pela área de Recursos Humanos do órgão de lotação do servidor.",
          },
          {
            title: "6. Segurança",
            content:
              "O acesso ao sistema é protegido por credenciais individuais. Todas as operações são registradas em log de auditoria.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Servidores podem solicitar acesso ou correção dos seus dados funcionais pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SIGM – Gestão de Materiais
  // ─────────────────────────────────────────────────────────────
  {
    id: "sigm",
    name: "SIGM (Gestão de Materiais)",
    category: "servicos",
    categoryLabel: "SERVIÇOS",
    icon: "Package",
    description:
      "Sistema integrado de gestão de materiais, patrimônio e almoxarifado do estado.",
    lastUpdated: "28/02/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "28/02/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula o acesso e a utilização do SIGM — Sistema Integrado de Gestão de Materiais, patrimônio e almoxarifado do Governo do Estado do Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao acessar o SIGM, o usuário declara ter lido e aceito integralmente as condições deste Termo de Uso.",
          },
          {
            title: "3. Usuários Autorizados",
            content:
              "O acesso é restrito a servidores com perfil habilitado pela chefia competente. Cada usuário possui perfil de acesso condizente com suas atribuições funcionais.",
          },
          {
            title: "4. Obrigações do Usuário",
            content:
              "O usuário deve registrar corretamente todas as movimentações de materiais e patrimônio, não realizar lançamentos indevidos e manter sigilo sobre dados patrimoniais sigilosos.",
          },
          {
            title: "5. Responsabilidade pelos Registros",
            content:
              "O usuário responde administrativa e legalmente pelos registros realizados sob suas credenciais no sistema.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de alterar este Termo a qualquer momento. O uso continuado do sistema constitui aceitação das alterações.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "28/02/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados pessoais e patrimoniais realizados pelo SIGM, em conformidade com a LGPD.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: dados de identificação dos usuários (matrícula, nome, órgão), registros de movimentação de materiais, dados de fornecedores e histórico de transações patrimoniais.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são tratados para gestão patrimonial e de almoxarifado, controle de estoque, auditorias internas e prestação de contas aos órgãos de controle.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se no exercício de função pública e cumprimento de obrigações legais administrativas e contábeis do Estado.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados patrimoniais podem ser acessados pela CGE, TCE-TO e demais órgãos de controle no exercício de suas atribuições fiscalizatórias.",
          },
          {
            title: "6. Segurança",
            content:
              "O SIGM opera com controle de acesso por perfil, criptografia de dados e registro de auditoria de todas as operações realizadas.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Usuários e fornecedores podem solicitar acesso ou correção de seus dados pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SIGTAP – Tabela de Procedimentos
  // ─────────────────────────────────────────────────────────────
  {
    id: "sigtap",
    name: "SIGTAP (Tabela de Procedimentos)",
    category: "saude",
    categoryLabel: "SAÚDE",
    icon: "HeartPulse",
    description:
      "Sistema de gerenciamento da Tabela de Procedimentos, Medicamentos e OPM da ATI.",
    lastUpdated: "18/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "18/03/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula a utilização do SIGTAP — Sistema de Gerenciamento da Tabela de Procedimentos, Medicamentos e Órteses, Próteses e Materiais Especiais (OPM) da ATI Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao utilizar o SIGTAP, o usuário declara ter lido e aceito integralmente as condições deste Termo de Uso.",
          },
          {
            title: "3. Usuários Autorizados",
            content:
              "O acesso é restrito a profissionais de saúde, gestores e técnicos administrativos devidamente credenciados junto à Secretaria de Estado da Saúde do Tocantins.",
          },
          {
            title: "4. Uso Responsável",
            content:
              "Os registros de procedimentos devem refletir fielmente os serviços prestados. O usuário é responsável pela veracidade dos lançamentos realizados sob suas credenciais.",
          },
          {
            title: "5. Limitações",
            content:
              "A ATI não se responsabiliza por inconsistências decorrentes de lançamentos incorretos ou duplicados realizados pelo usuário.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "Este Termo pode ser alterado a qualquer momento. O uso continuado do sistema constitui aceitação das alterações publicadas.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "18/03/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados de saúde e dados pessoais de profissionais realizados pelo SIGTAP, em conformidade com a LGPD e normas do SUS.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: dados de identificação dos profissionais (nome, CRM/CRO/COREN, lotação), registros de procedimentos realizados e dados agregados de produção assistencial.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são utilizados para gestão da tabela de procedimentos, faturamento ao SUS, auditoria médica e elaboração de indicadores de saúde.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se na execução de políticas públicas de saúde e cumprimento de obrigações legais perante o Ministério da Saúde.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados de produção são transmitidos ao Ministério da Saúde conforme exigências do DATASUS. O compartilhamento segue os protocolos de segurança e privacidade do SUS.",
          },
          {
            title: "6. Segurança",
            content:
              "Dados de saúde são classificados como sensíveis e tratados com camada adicional de proteção, incluindo criptografia reforçada e acesso restrito por perfil funcional.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Profissionais de saúde podem solicitar acesso ou correção de seus dados pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // e-SUS Notifica
  // ─────────────────────────────────────────────────────────────
  {
    id: "esus-notifica",
    name: "e-SUS Notifica",
    category: "saude",
    categoryLabel: "SAÚDE",
    icon: "Stethoscope",
    description:
      "Sistema de notificações em saúde para registro e acompanhamento de agravos e doenças.",
    lastUpdated: "22/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "22/03/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula a utilização do e-SUS Notifica, sistema de notificação compulsória de agravos e doenças em saúde pública no Estado do Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao utilizar o e-SUS Notifica, o profissional declara ter lido e aceito integralmente as condições deste Termo de Uso.",
          },
          {
            title: "3. Obrigatoriedade de Notificação",
            content:
              "O sistema operacionaliza o cumprimento da notificação compulsória prevista na Lei nº 6.259/1975 e normas da SESAU-TO. O usuário é responsável pela notificação tempestiva e precisa dos casos identificados.",
          },
          {
            title: "4. Confidencialidade",
            content:
              "Os dados de identificação dos pacientes notificados são sigilosos. O usuário compromete-se a não divulgar informações individualizadas fora do contexto de vigilância epidemiológica.",
          },
          {
            title: "5. Responsabilidade",
            content:
              "O profissional de saúde responde pelo conteúdo das notificações realizadas sob suas credenciais.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de alterar este Termo a qualquer momento. O uso continuado constitui aceitação das alterações.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "22/03/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados sensíveis de saúde coletados pelo e-SUS Notifica, em conformidade com a LGPD e normas de vigilância epidemiológica.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: dados de identificação do paciente (nome, data de nascimento, endereço, CNS), dados clínicos e epidemiológicos do agravo notificado, e dados do profissional notificador.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são utilizados exclusivamente para vigilância epidemiológica, controle de surtos e elaboração de indicadores de saúde pública.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se na execução de políticas públicas de saúde e cumprimento de obrigação legal de notificação compulsória prevista na legislação sanitária.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados são transmitidos ao Ministério da Saúde (SINAN) conforme fluxo nacional de vigilância epidemiológica. O acesso é restrito a profissionais autorizados da vigilância em saúde.",
          },
          {
            title: "6. Segurança",
            content:
              "Dados de saúde são tratados como dados sensíveis, com criptografia reforçada, controle de acesso estrito e pseudonimização quando aplicável.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Pacientes podem solicitar acesso às notificações que lhes dizem respeito pelo e-mail contato@ati.to.gov.br, observadas as restrições legais de vigilância epidemiológica.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SISVAN – Vigilância Alimentar
  // ─────────────────────────────────────────────────────────────
  {
    id: "sisvan",
    name: "SISVAN (Vigilância Alimentar)",
    category: "saude",
    categoryLabel: "SAÚDE",
    icon: "Apple",
    description:
      "Sistema de Vigilância Alimentar e Nutricional para acompanhamento da população.",
    lastUpdated: "01/04/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "01/04/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula a utilização do SISVAN — Sistema de Vigilância Alimentar e Nutricional, ferramenta de acompanhamento do estado nutricional da população tocantinense.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao utilizar o SISVAN, o profissional declara ter lido e aceito integralmente as condições deste Termo de Uso.",
          },
          {
            title: "3. Usuários Autorizados",
            content:
              "O sistema destina-se a profissionais de saúde da Atenção Básica credenciados pelo município ou estado, para registro de avaliações nutricionais de usuários do SUS.",
          },
          {
            title: "4. Responsabilidade pelos Registros",
            content:
              "O profissional é responsável pela veracidade dos dados antropométricos e de consumo alimentar inseridos no sistema.",
          },
          {
            title: "5. Confidencialidade",
            content:
              "Dados individuais dos usuários são sigilosos e não podem ser divulgados fora do contexto de cuidado em saúde.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de alterar este Termo a qualquer momento. O uso continuado constitui aceitação das alterações.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "01/04/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados de saúde e nutrição coletados pelo SISVAN, em conformidade com a LGPD e políticas do Ministério da Saúde.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: dados de identificação do cidadão (CNS, nome, data de nascimento, sexo, raça/cor), dados antropométricos (peso, altura, IMC), consumo alimentar e fase do ciclo de vida.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são tratados para monitoramento do estado nutricional da população, elaboração de indicadores de saúde, e planejamento de ações de promoção da alimentação saudável.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se na execução de políticas públicas de saúde e nutrição, conforme Política Nacional de Alimentação e Nutrição (PNAN).",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados são consolidados e transmitidos ao Ministério da Saúde em formato agregado. Dados individuais permanecem na esfera estadual e municipal.",
          },
          {
            title: "6. Segurança",
            content:
              "Dados nutricionais são tratados como dados de saúde (categoria sensível na LGPD), com controles de segurança reforçados.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Cidadãos podem solicitar acesso ao seu histórico nutricional registrado pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SIAD – Administração e Finanças
  // ─────────────────────────────────────────────────────────────
  {
    id: "siad",
    name: "SIAD (Administração e Finanças)",
    category: "servicos",
    categoryLabel: "SERVIÇOS",
    icon: "Landmark",
    description:
      "Sistema integrado de administração e finanças do Governo do Estado do Tocantins.",
    lastUpdated: "08/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "08/03/2026",
        sections: [
          {
            title: "1. Objetivo",
            content:
              "Este Termo de Uso regula o acesso e a utilização do SIAD — Sistema Integrado de Administração e Finanças do Governo do Estado do Tocantins.",
          },
          {
            title: "2. Aceitação dos Termos",
            content:
              "Ao acessar o SIAD, o usuário declara ter lido e aceito integralmente as condições deste Termo de Uso.",
          },
          {
            title: "3. Acesso e Perfis",
            content:
              "O acesso é concedido por perfil funcional, conforme as atribuições do servidor. Cada operação financeira é vinculada à matrícula do usuário responsável.",
          },
          {
            title: "4. Responsabilidade Financeira",
            content:
              "O usuário responde administrativamente por todos os registros, empenhos, liquidações e pagamentos realizados sob suas credenciais no sistema.",
          },
          {
            title: "5. Sigilo das Informações",
            content:
              "Informações financeiras e orçamentárias acessadas pelo SIAD são sigilosas e não podem ser divulgadas sem autorização competente.",
          },
          {
            title: "6. Disposições Gerais",
            content:
              "A ATI reserva-se o direito de alterar este Termo a qualquer momento. O uso continuado do sistema constitui aceitação das alterações.",
          },
          {
            title: "7. Contato",
            content:
              "Para dúvidas, entre em contato pelo e-mail contato@ati.to.gov.br ou pelo telefone (63) 3212-4500.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "08/03/2026",
        sections: [
          {
            title: "1. Introdução",
            content:
              "Esta Política descreve o tratamento de dados pessoais e financeiros realizados pelo SIAD, em conformidade com a LGPD e normas de transparência fiscal.",
          },
          {
            title: "2. Dados Coletados",
            content:
              "Coletamos: dados de identificação dos usuários (matrícula, nome, órgão), registros de transações financeiras, dados de credores e beneficiários de pagamentos.",
          },
          {
            title: "3. Finalidade do Tratamento",
            content:
              "Os dados são tratados para execução orçamentária e financeira do Estado, prestação de contas a órgãos de controle e transparência fiscal.",
          },
          {
            title: "4. Base Legal",
            content:
              "O tratamento fundamenta-se no cumprimento de obrigações legais de gestão fiscal previstas na Lei de Responsabilidade Fiscal e legislação estadual pertinente.",
          },
          {
            title: "5. Compartilhamento de Dados",
            content:
              "Dados financeiros são acessíveis à CGE, SEFAZ, TCE-TO e demais órgãos de controle no exercício de suas atribuições. Dados de execução orçamentária são publicados no Portal da Transparência.",
          },
          {
            title: "6. Segurança",
            content:
              "O SIAD opera com autenticação em dois fatores para operações financeiras críticas, criptografia de dados e registro imutável de log de auditoria.",
          },
          {
            title: "7. Direitos do Titular",
            content:
              "Servidores e credores podem solicitar acesso ou correção de seus dados pelo e-mail contato@ati.to.gov.br.",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Agrotins+
  // ─────────────────────────────────────────────────────────────
  {
    id: "agrotins",
    name: "Agrotins+",
    category: "outros",
    categoryLabel: "OUTROS",
    icon: "Sprout",
    description:
      "Plataforma digital do evento Agrotins com informações sobre programação, inscrições e conteúdo.",
    lastUpdated: "25/03/2026",
    docs: {
      terms: {
        type: "terms",
        label: "Termos de Uso",
        lastUpdated: "25/03/2026",
        sections: [
          {
            title: "Aceitação",
            content:
              "Ao utilizar a aplicação Agrotins, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso. O acesso aos serviços digitais da feira está condicionado à observância das regras aqui estabelecidas.",
          },
          {
            title: "Identificação do Controlador",
            content:
              "Órgão Responsável: Agência de Tecnologia da Informação do Tocantins (ATI). CNPJ: 32.893.926/0001-40. Endereço: Quadra 103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, 77.001-020, Palmas-TO. Contato Oficial: contato@ati.to.gov.br.",
          },
          {
            title: "Descrição do Serviço",
            content:
              "A aplicação funciona como o guia oficial da Feira de Tecnologia Agropecuária do Tocantins (Agrotins). O sistema permite ao usuário: consultar a programação completa de eventos, incluindo palestras e clínicas tecnológicas; visualizar o mapa interativo do parque para localização de estandes e serviços; acessar notícias atualizadas sobre o agronegócio e o evento; e localizar expositores e obter informações de utilidade pública sobre a feira.",
          },
          {
            title: "Cadastro e Segurança",
            content:
              "O usuário deve fornecer informações exatas e atualizadas, sob pena de responsabilidade administrativa e civil. A conta é pessoal e intransferível — o usuário é o único responsável por manter a confidencialidade de suas credenciais de acesso. O acesso pode ser realizado via CPF e senha cadastrada ou através de autenticação por contas de terceiros (Google/Apple), conforme as telas de login do sistema.",
          },
          {
            title: "Uso Permitido e Conduta",
            content:
              "É estritamente proibida a utilização da aplicação para: prática de atos ilícitos ou contrários à moralidade pública; inserção de dados falsos ou tentativa de fraude contra a administração pública; ações que visem comprometer a integridade tecnológica dos sistemas do Estado (hacking, engenharia reversa ou ataques de negação de serviço); e qualquer tentativa de acesso não autorizado aos sistemas da Administração Pública Estadual.",
          },
          {
            title: "Propriedade Intelectual",
            content:
              "Todo o conteúdo, incluindo logotipos, códigos-fonte, designs e textos, é de propriedade exclusiva do Estado do Tocantins, sendo protegido pelas leis de direito autoral e propriedade intelectual.",
          },
          {
            title: "LGPD – Dados Pessoais",
            content:
              "Dados Coletados: nome completo, CPF, e-mail, telefone e credenciais de acesso. Finalidade: identificação do usuário, personalização da agenda de eventos, envio de informativos sobre a feira e viabilização das funcionalidades do mapa. Base Legal: execução de políticas públicas, cumprimento de obrigação legal e legítimo interesse. Direitos do Usuário: o usuário pode solicitar acesso, correção ou exclusão de seus dados através do e-mail contato@ati.to.gov.br.",
          },
          {
            title: "Responsabilidade e Suspensão",
            content:
              "A administração pública busca garantir a disponibilidade contínua do serviço, porém não se responsabiliza por interrupções decorrentes de falhas técnicas externas ou manutenção programada. O acesso do usuário poderá ser suspenso ou cancelado imediatamente em caso de violação destes termos. Contas que violarem estas normas poderão ser suspensas ou encerradas sem aviso prévio. A ATI adota medidas de segurança para proteger o sistema, porém a aplicação é fornecida \"como está\".",
          },
          {
            title: "Legislação e Foro",
            content:
              "Estes Termos são regidos pela legislação brasileira, em especial a Lei nº 14.129/2021 (Governo Digital). Fica eleito o foro da comarca de Palmas/TO para dirimir quaisquer controvérsias.",
          },
        ],
      },
      privacy: {
        type: "privacy",
        label: "Política de Privacidade",
        lastUpdated: "25/03/2026",
        sections: [
          {
            title: "Introdução",
            content:
              "Esta Política descreve como a Agência de Tecnologia da Informação do Tocantins (ATI) trata os dados pessoais dos usuários da aplicação Agrotins, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).",
          },
          {
            title: "Dados Coletados",
            content:
              "Para o funcionamento adequado da aplicação, são coletados: Dados de Identificação (nome, CPF e endereço de e-mail); Dados de Comunicação (número de telefone celular); e Dados de Uso (localização em tempo real para navegação no mapa do evento e registros de acesso/logs).",
          },
          {
            title: "Finalidade do Tratamento",
            content:
              "Os dados coletados são utilizados para: autenticação segura do usuário no aplicativo; gerenciamento da programação personalizada de palestras e eventos escolhidos pelo usuário; facilitar a navegação dentro do Parque Agrotins através do mapa digital; e envio de comunicações relevantes sobre a feira e segurança do usuário.",
          },
          {
            title: "Compartilhamento de Dados",
            content:
              "O compartilhamento de dados ocorre prioritariamente entre órgãos e entidades da Administração Pública Estadual, visando a execução de políticas públicas e a interoperabilidade de sistemas, sempre respeitando os limites da lei.",
          },
          {
            title: "Base Legal",
            content:
              "O tratamento de dados é realizado com base na execução de serviço público, cumprimento de obrigação legal e no legítimo interesse da administração pública em fomentar o setor agropecuário do Estado.",
          },
          {
            title: "Compartilhamento e Retenção",
            content:
              "Compartilhamento: os dados poderão ser compartilhados com a Secretaria da Agricultura e Pecuária (SEAGRO) para fins de gestão do evento e estatísticas de participação, vedada a comercialização dessas informações. Retenção: os dados são armazenados pelo tempo necessário para cumprir as finalidades descritas ou conforme prazos legais de guarda documental.",
          },
          {
            title: "Direitos do Titular",
            content:
              "Em conformidade com a LGPD, o usuário tem direito ao acesso, correção, exclusão, portabilidade e revogação do consentimento. Para exercer esses direitos, o contato deve ser feito via e-mail: contato@ati.to.gov.br.",
          },
          {
            title: "Segurança",
            content:
              "A ATI utiliza protocolos de proteção e medidas técnicas administrativas para manter os dados seguros e evitar acessos não autorizados ou situações acidentais de destruição ou perda.",
          },
          {
            title: "Exclusão da Conta",
            content:
              "A exclusão da conta pode ser realizada diretamente pelo aplicativo: acesse sua conta no app, vá até as configurações de perfil, selecione a opção \"Excluir conta\" e confirme a exclusão. Ao excluir sua conta, serão removidos: dados de cadastro (e-mail, nome etc.), informações associadas à conta e dados de favoritos e registros vinculados ao usuário. Alguns dados podem ser mantidos temporariamente por até 30 dias para fins legais ou de segurança. Em caso de dificuldades, entre em contato pelo e-mail contato@ati.to.gov.br.",
          },
          {
            title: "Alterações",
            content:
              "Esta Política de Privacidade poderá ser atualizada periodicamente. A data da última atualização estará sempre visível no topo deste documento.",
          },
        ],
      },
    },
  },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "saude", label: "Saúde" },
  { id: "servicos", label: "Serviços" },
  { id: "infraestrutura", label: "Infraestrutura" },
  { id: "outros", label: "Outros" },
];

export const featureItems = [
  {
    icon: "Lock",
    title: "Criptografia de Dados",
    description:
      "Todos os serviços digitais adotam criptografia de dados em repouso e em trânsito, garantindo a proteção das suas informações pessoais.",
  },
  {
    icon: "UserCheck",
    title: "Acesso Individual",
    description:
      "Cada conta de usuário é individual, vinculada ao CPF, com controle rigoroso de permissões pelo princípio do menor privilégio.",
  },
  {
    icon: "Eye",
    title: "Transparência",
    description:
      "Você tem direito ao acesso, correção e informação sobre o uso dos seus dados pessoais em qualquer sistema do governo.",
  },
  {
    icon: "ShieldCheck",
    title: "Conformidade LGPD",
    description:
      "Nossos sistemas seguem as diretrizes da Lei Geral de Proteção de Dados, assegurando seus direitos como titular de dados.",
  },
  {
    icon: "FileSearch",
    title: "Auditoria e Rastreabilidade",
    description:
      "Todos os acessos e operações em sistemas geridos pela ATI são registrados para garantir segurança e responsabilização.",
  },
  {
    icon: "Bell",
    title: "Comunicação de Incidentes",
    description:
      "Qualquer incidente de segurança é comunicado imediatamente à Equipe de Resposta a Incidentes Cibernéticos (ETIR/NIRTI).",
  },
];

export const rights = [
  "Acesso gratuito ao Portal de Serviços",
  "Atendimento nos termos da Carta de Serviços ao Cidadão",
  "Padronização de formulários e documentos",
  "Protocolo digital das solicitações apresentadas",
  "Escolha do canal preferencial de comunicação (e-mail, SMS, push)",
  "Gratuidade no acesso aos serviços digitais",
];

export const contacts = [
  {
    icon: "Mail",
    label: "E-mail",
    value: "contato@ati.to.gov.br",
    href: "mailto:contato@ati.to.gov.br",
  },
  {
    icon: "Phone",
    label: "Telefone",
    value: "(63) 3212-4500",
    href: "tel:+556332124500",
  },
  {
    icon: "MapPin",
    label: "Endereço",
    value:
      "103 Norte, Rua NO-05, Lote 02, Plano Diretor Norte, Palmas-TO, CEP 77.001-020",
    href: null,
  },
  {
    icon: "Globe",
    label: "Portal",
    value: "to.gov.br/ati",
    href: "https://to.gov.br/ati",
  },
  {
    icon: "ExternalLink",
    label: "Ouvidoria",
    value: "Acesse a Ouvidoria do Estado",
    href: "https://to.gov.br/ouvidoria",
  },
];
