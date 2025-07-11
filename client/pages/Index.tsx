import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Users,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  ArrowRight,
  Gavel,
  Heart,
  Target,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useRef, useEffect } from "react";


function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest),
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
}

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-TrpaHPXcLkfW1_f9GJc_AgZWQLgAbb-FA&s"
                  alt="GMUN Logo"
                  className="h-10 w-10 object-contain filter drop-shadow-sm bg-background rounded-lg p-1"
                />
              </div>
              <span className="text-xl font-bold text-foreground">GMUN</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="events"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Events
              </a>
              <a
                href="#conferences"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Conferences
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </a>
              <ThemeToggle />
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">Join GMUN</Button>
            </div>
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="relative p-2"
              >
                <motion.div
                  className="w-5 h-5 flex flex-col justify-center items-center"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="w-4 h-0.5 bg-foreground block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 2 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-4 h-0.5 bg-foreground block mt-1"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-4 h-0.5 bg-foreground block mt-1"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>


        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur border-b"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <motion.div
                  className="flex flex-col space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.a
                    href="#about"
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    About
                  </motion.a>
                  <motion.a
                    href="#events"
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Events
                  </motion.a>
                  <motion.a
                    href="#conferences"
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Conferences
                  </motion.a>
                  <motion.a
                    href="#testimonials"
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    Testimonials
                  </motion.a>
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Button>
                    <Button
                      className="w-full justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join GMUN
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge variant="secondary" className="mb-6 relative">
                  <Sparkles className="w-3 h-3 mr-2 text-primary" />
                  Building Tomorrow's Global Leaders
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Global Model
                </motion.span>
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {" "}
                  United Nations
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Empowering students to engage with international
                affairs, develop diplomatic skills, and create solutions for
                global challenges through authentic UN simulations.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-3 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    Register for Conference
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-3"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.div
                className="relative"
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-0.5, 0.5, -0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[32rem] lg:h-96">
                  <div className="w-full h-full bg-gray-900 rounded-[2rem] shadow-2xl border-4 border-gray-800 p-3">
                    <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden shadow-inner">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjWDg8-XfHsUw6dROsErT0rWJ5cQxFRPIbw&s"
                        alt="Global Model United Nations Conference"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" ref={statsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isStatsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={50} suffix="+" duration={2.5} />
              </div>
              <motion.div
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Countries 
              </motion.div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isStatsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={10} suffix="K+" duration={2.8} />
              </div>
              <motion.div
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Students Participated
              </motion.div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isStatsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={25} suffix="+" duration={2.2} />
              </div>
              <motion.div
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
              Conferences
              </motion.div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isStatsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={5} duration={2} />
              </div>
              <motion.div
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Years of Excellence
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose GMUN?
            </h2>
            <p className="text-lg text-muted-foreground">
              GMUN provides an unparalleled platform for students to engage with
              global issues, develop critical thinking skills, and build lasting
              connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Authentic Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Experience real UN procedures with accurate committee
                  simulations, official documentation, and professional
                  diplomatic protocols.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Large Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Connect with passionate students from around the country,
                  building networks that last beyond the conference experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Skill Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Develop essential skills including public speaking,
                  negotiation, research, critical thinking, and diplomatic
                  communication.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From flagship conferences to specialized workshops, GMUN hosts a
                diverse range of events that bring together passionate young
                diplomats from around the world.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Event Types */}
              <div className="space-y-8">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      GMUN Workshop
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Come join us in this Global Model United Nations Workshop, to begin this great journey and get a glimpse into Model United Nations.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Opening Ceremony
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized conferences focused on regional issues and
                      challenges, providing delegates with deeper insights into
                      specific geopolitical contexts and cultural perspectives.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Authentic Simulations
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cutting-edge conferences that break geographical
                      barriers, allowing immense participation with immersive environments.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="bg-background rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  2024 Event Highlights
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      25+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Events Hosted
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      30+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Universities Visited
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      5000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Participants
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      95%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    Next Major Event
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    GMUN UNHRC - The United Nations Human Rights Council (UNHRC) is an intergovernmental body within the UN system responsible for promoting and protecting human rights globally.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      📅 January 12-14, 2025
                    </span>
                    <span className="text-muted-foreground">
                      📍 NR121, Nalanda Classroom Complex
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <section id="conferences" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Upcoming Conferences
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our world-class Model UN conferences hosted in major cities
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-2">Upcoming</Badge>
                <CardTitle className="text-xl">GMUN UNHRC</CardTitle>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  January 12-14, 2025
                </CardDescription>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  NR121, Nalanda Classroom Complex
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Human Rights Situation in Palestine and Other Occupied Arab Territories.
                </p>
                <Button className="w-full">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit mb-2">
                  Registration Open
                </Badge>
                <CardTitle className="text-xl">GMUN UNSC</CardTitle>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  January 13-15, 2025
                </CardDescription>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  NR122, Nalanda Classroom Complex
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Discussing the role of the UNSC in protection of civilians during armed conflict
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Badge variant="outline" className="w-fit mb-2">
                  Open for All
                </Badge>
                <CardTitle className="text-xl">GMUN Workshop</CardTitle>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  January 5, 2025
                </CardDescription>
                <CardDescription className="flex items-center text-sm text-muted-foreground">
                  <Globe className="h-4 w-4 mr-2" />
                  Conference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our innovative in-person workshop for an immersive Model UN experience and a deeper dive into the event.
                </p>
                <Button variant="outline" className="w-full">
                  Join 
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What Past Participants Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from delegates who have experienced the transformative power
              of Global Model United Nations conferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "GMUN completely transformed my understanding of international
                  relations. The debates were intense, and I learned so much
                  about diplomacy and negotiation. It was truly life-changing."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">TB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Tanush Badonia
                    </div>
                    <div className="text-sm text-muted-foreground">
                      IIT Kharagpur
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "The networking opportunities at GMUN are unparalleled. I made
                  a lot of connections with different people and learned about different
                  perspectives on global issues. Highly recommended!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Aarav Sharma
                    </div>
                    <div className="text-sm text-muted-foreground">
                      IIT Kanpur
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "As a first-time delegate, I was nervous, but the GMUN
                  community was so welcoming. The experience boosted my
                  confidence and sparked my passion for international affairs."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Ananya Patel
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Delhi University
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "The level of preparation and organization at GMUN is
                  exceptional. Every detail is thoughtfully planned, making it
                  feel like a real UN conference. Outstanding experience!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">PS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Priya Singh
                    </div>
                    <div className="text-sm text-muted-foreground">
                      BITS Pilani
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "GMUN completely transformed my understanding of international
                  relations. The debates were intense, and I learned so much
                  about diplomacy and negotiation. It was truly life-changing."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">TB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Tanush Badonia
                    </div>
                    <div className="text-sm text-muted-foreground">
                      IIT Kharagpur
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "The networking opportunities at GMUN are unparalleled. I made
                  a lot of connections with different people and learned about different
                  perspectives on global issues. Highly recommended!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Aarav Sharma
                    </div>
                    <div className="text-sm text-muted-foreground">
                      IIT Kanpur
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students in the Global Model United
              Nations experience. Your journey to becoming a global leader
              starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-TrpaHPXcLkfW1_f9GJc_AgZWQLgAbb-FA&s"
                  alt="GMUN Logo"
                  className="h-8 w-8 object-contain filter drop-shadow-sm bg-background rounded-md p-1"
                />
                <span className="text-lg font-bold">GMUN</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering the next generation of global leaders through
                authentic Model United Nations experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Commitees</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    UNSC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    UNHRC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    G20 Summit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    DISEC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    International Press
                  </a>
                </li>
              </ul>
            </div>
            <div><h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/gmun.iitkgp/"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Global Model United Nations, Communique, IIT Kharagpur. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
