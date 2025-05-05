
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer } from "@/components/ui/chart";
import { FileText, User, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockUserData = {
  name: "Fábio José Moretão de Souza",
  email: "fabiomoretao@gmail.com",
  cpf: "482.856.818-23",
  address: "XV de Novembro, 1234",
  city: "Timburi",
  state: "SP",
  zipCode: "18860-007",
  preferredGame: "val",
  attendedEvents: ["IEM Rio Major", "ESL One Brasil", "CBLOL Finals"],
  interests: ["Pro Players", "Campeonatos", "Streaming", "Eventos"]
};

const interestData = [
  { name: 'Pro Players', value: 30 },
  { name: 'Campeonatos', value: 45 },
  { name: 'Streaming', value: 25 },
  { name: 'Eventos', value: 40 },
];

const eventsData = [
  { name: 'IEM Rio Major', value: 40 },
  { name: 'ESL One Brasil', value: 30 },
  { name: 'CBLOL Finals', value: 30 }
];

const purchaseData = [
  { name: 'Jan', value: 10 },
  { name: 'Fev', value: 15 },
  { name: 'Mar', value: 25 },
  { name: 'Abr', value: 35 }
];

const COLORS = ['#FFD700', '#FFB606', '#B28228', '#A9A9A9'];

const Analysis = () => {
  const navigate = useNavigate();
  const getGamePreference = (game: string) => {
    const games = {
      cs2: "Counter-Strike 2",
      val: "Valorant",
      lol: "League of Legends",
      r6: "Rainbow Six Siege",
      rkl: "Rocket League",
      pubg: "PUBG",
      fut7: "Kings League",
      redram: "automobilismo",
      other: "Outro"
    };
    return games[game as keyof typeof games] || game;
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050515] bg-opacity-95"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10"></div>
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'%23FFD700\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")', 
                    backgroundSize: '20px 20px' }}>
        </div>
      </div>
      
      {/* Header */}
      <header className="relative border-b border-[#FFD700]/20 bg-black/95 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div onClick={() => navigate('/')} className="cursor-pointer">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  CONHEÇA SEU FÃ
                </h1>
                <p className="text-sm font-light text-[#FFD700]">
                  Sobre o fã
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 space-y-6 relative z-10">
        {/* User Profile Card */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 bg-[#0a0a1a]/90 border border-[#FFD700]/20 shadow-lg">
            <CardHeader className="border-b border-[#FFD700]/10 pb-3">
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#FFD700]" />
                Perfil do Fã
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-full border-2 border-[#FFD700] flex items-center justify-center bg-[#0D214f]/30">
                  <span className="text-4xl font-bold text-[#FFD700]">{mockUserData.name.charAt(0)}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{mockUserData.name}</h2>
                  <p className="text-[#B28228] font-mono">{mockUserData.cpf}</p>
                  <p className="text-[#A9A9A9]">{mockUserData.city}, {mockUserData.state}</p>
                </div>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-[#A9A9A9] text-sm">Email</p>
                  <p className="font-medium text-white">{mockUserData.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#A9A9A9] text-sm">Game Preferido</p>
                  <p className="font-medium text-white">{getGamePreference(mockUserData.preferredGame)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#A9A9A9] text-sm">Endereço</p>
                  <p className="font-medium text-white">{mockUserData.address}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#A9A9A9] text-sm">CEP</p>
                  <p className="font-medium text-white">{mockUserData.zipCode}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a0a1a]/90 border border-[#FFD700]/20 shadow-lg">
            <CardHeader className="border-b border-[#FFD700]/10 pb-3">
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#FFD700]" />
                Documentos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center border border-[#FFD700]/20 rounded-lg p-4 bg-[#0D214f]/10">
                  <div className="h-16 w-12 flex items-center justify-center mb-2">
                    <FileText className="h-12 w-12 text-[#A9A9A9]" />
                  </div>
                  <span className="text-[#C0C0C0] text-sm text-center">Documento 1</span>
                  <div className="mt-2 w-5 h-5 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center border border-[#FFD700]/20 rounded-lg p-4 bg-[#0D214f]/10">
                  <div className="h-16 w-12 flex items-center justify-center mb-2">
                    <FileText className="h-12 w-12 text-[#A9A9A9]" />
                  </div>
                  <span className="text-[#C0C0C0] text-sm text-center">Documento 2</span>
                  <div className="mt-2 w-5 h-5 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feed de Redes Sociais */}
        <Card className="bg-[#0a0a1a]/90 border border-[#FFD700]/20 shadow-lg mb-8">
          <CardHeader className="border-b border-[#FFD700]/10 pb-3">
            <CardTitle className="text-xl text-white">
              Feed de Redes Sociais
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="h-16 rounded bg-[#0D214f]/10 border border-[#FFD700]/10 animate-pulse"></div>
              <div className="h-16 rounded bg-[#0D214f]/10 border border-[#FFD700]/10 animate-pulse"></div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Charts */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* TInsteresses do fã */}
          <Card className="bg-[#0a0a1a]/90 border border-[#FFD700]/20 shadow-lg">
            <CardHeader className="border-b border-[#FFD700]/10 pb-3">
              <CardTitle className="text-xl text-white">
                Interesses
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[220px]">
                <ChartContainer 
                  className="text-[#FFD700]"
                  config={{
                    line: { theme: { light: "#FFD700", dark: "#FFD700" } },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={interestData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {interestData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null;
                          return (
                            <div className="bg-black/90 border border-[#FFD700]/20 p-2 rounded">
                              <p className="text-[#FFD700]">{`${payload[0].name}: ${payload[0].value}%`}</p>
                            </div>
                          );
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Eventos Assistidos */}
          <Card className="bg-[#0a0a1a]/90 border border-[#FFD700]/20 shadow-lg">
            <CardHeader className="border-b border-[#FFD700]/10 pb-3">
              <CardTitle className="text-xl text-white">
                Eventos Assistidos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[220px]">
                <ChartContainer 
                  className="text-[#FFD700]"
                  config={{
                    line: { theme: { light: "#FFD700", dark: "#FFD700" } },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={eventsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {eventsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null;
                          return (
                            <div className="bg-black/90 border border-[#FFD700]/20 p-2 rounded">
                              <p className="text-[#FFD700]">{`${payload[0].name}: ${payload[0].value}%`}</p>
                            </div>
                          );
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Compras Realizadas */}
          <Card className="bg-[#0a0a1a]/90 border border-[#FFD700]/20 shadow-lg">
            <CardHeader className="border-b border-[#FFD700]/10 pb-3">
              <CardTitle className="text-xl text-white">
                Compras Realizadas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[220px]">
                <ChartContainer 
                  className="text-[#FFD700]"
                  config={{
                    line: { theme: { light: "#FFD700", dark: "#FFD700" } },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={purchaseData}>
                      <XAxis dataKey="name" stroke="#FFD700" />
                      <YAxis stroke="#FFD700" />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (!active || !payload) return null;
                          return (
                            <div className="rounded-lg border border-[#FFD700]/20 bg-black/95 p-2 shadow-sm">
                              <div className="grid gap-2">
                                {payload.map((entry) => (
                                  <div key={entry.name} className="flex gap-2">
                                    <div className="flex w-full flex-col">
                                      <span className="text-[0.70rem] uppercase text-[#FFD700]">
                                        {entry.name}
                                      </span>
                                      <span className="font-bold text-white">
                                        {entry.value}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#FFD700"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analysis;