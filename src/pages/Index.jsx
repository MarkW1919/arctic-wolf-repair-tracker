import React, { useState } from "react";
import { Container, VStack, HStack, Input, Text, Box, Heading, Divider, Select, Textarea, Button, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  const [parts, setParts] = useState(3524.37);
  const [extras, setExtras] = useState(150);
  const [taxRate, setTaxRate] = useState(8.25);
  const [shopSupplies, setShopSupplies] = useState(150);
  const [sublet, setSublet] = useState(0);
  const [hrs, setHrs] = useState(60);
  const [laborRate, setLaborRate] = useState(175);

  const [roofMembrane, setRoofMembrane] = useState(1825.14);
  const [roofKit, setRoofKit] = useState(485.26);
  const [slfLvlDicor, setSlfLvlDicor] = useState(685.16);
  const [nonLvlDicir, setNonLvlDicir] = useState(355.72);
  const [roofScrews, setRoofScrews] = useState(76.28);
  const [glue, setGlue] = useState(96.81);
  const [additionalParts, setAdditionalParts] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [unitDescription, setUnitDescription] = useState("");
  const [vin, setVin] = useState("");
  const [estimate, setEstimate] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [customerPayType, setCustomerPayType] = useState("");
  const [repairDescription, setRepairDescription] = useState("UPON INSPECTION, FOUND TRAILER TO BE DAMAGED: FOUND DAMAGE DONE TO MEMBRANE OF THE ROOF MEMBRANE ON TRAILER. POSSIBLY BY TREE BRANCH OR HAIL. NEED TO REMOVE ALL COMPONENTS (A/C UNITS, ATTIC VENTS, COVERS, ANTENNAS…ETC.) REMOVE MENBRANE. INSPECT OSB PLYWOOD FOR DAMAGE, REPLACE/OVERLAY IF NEEDED. LAY GLUE AND NEW MEMBRANE AND REINSTALL ALL COMPONENTS (CHECK FOR OPERATION).");

  const [deductible, setDeductible] = useState(0);
  const [formattedEstimate, setFormattedEstimate] = useState("");

  const calculateLabor = () => hrs * laborRate;
  const calculateTax = () => (parts + extras + shopSupplies + sublet) * 0.0825;
  const calculateTotal = () => parts + calculateLabor() + extras + shopSupplies + sublet + calculateTax() + additionalParts - deductible;

  const formatEstimate = () => {
    const laborSum = `${hrs}HRS X ${laborRate}/HR = $${calculateLabor().toFixed(2)}`;
    const partsList = [
      { name: "ROOF MEMBRANE", price: 1825.14 },
      { name: "ROOF KIT", price: 485.26 },
      { name: "SLF LVL DICOR", price: 685.16 },
      { name: "NON LVL DICIR", price: 355.72 },
      { name: "ROOF SCREWS", price: 76.28 },
      { name: "GLUE", price: 96.81 },
    ];

    const formattedParts = partsList.map(part => `${part.name}: $${part.price.toFixed(2)}`).join("\n");
    const formattedEstimate = `
Formula to calculate labor sum:
${laborSum}

${formattedParts}

Shop Supplies: $${shopSupplies.toFixed(2)}
PARTS: $${parts.toFixed(2)}
LABOR: $${calculateLabor().toFixed(2)}
TAX (${taxRate}%): $${calculateTax().toFixed(2)}
TOTAL: $${calculateTotal().toFixed(2)}

Formula to calculate Tax sum:
Total sum from parts X ${taxRate}% = Tax. Labor cannot be taxed.
    `;

    setFormattedEstimate(formattedEstimate);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Flex width="100%" justifyContent="space-between" alignItems="center" mb={4} position="relative">
        <Image src="/images/new-logo.png" alt="Company Logo" objectFit="cover" width="100%" height="150px" />
        <Box textAlign="right" position="absolute" right="10px" top="10px" color="white">
          <Text>Mark Williamson</Text>
          <Text>Service Advisor</Text>
          <Text>RV Station</Text>
          <Text>Colbert, OK 74733</Text>
          <Text>580-579-5036</Text>
          <Text>mark@rvstation.com</Text>
        </Box>
      </Flex>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">RV Repair Estimate Builder</Heading>
        <Divider />
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Estimate#</Heading>
          <Input type="text" value={estimate} onChange={(e) => setEstimate(e.target.value)} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>First Name</Heading>
          <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Last Name</Heading>
          <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Phone Number</Heading>
          <Input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Unit Description</Heading>
          <Input type="text" value={unitDescription} onChange={(e) => setUnitDescription(e.target.value)} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>VIN#</Heading>
          <Input type="text" value={vin} onChange={(e) => setVin(e.target.value)} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Advisor</Heading>
          <Select placeholder="Select Service Advisor" value={advisor} onChange={(e) => setAdvisor(e.target.value)}>
            <option value="Mark.W">Mark.W</option>
            <option value="Alicia.E">Alicia.E</option>
            <option value="Hunter.S">Hunter.S</option>
          </Select>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Payment Type</Heading>
          <Select placeholder="Select option" value={customerPayType} onChange={(e) => setCustomerPayType(e.target.value)}>
            <option value="extWarranty">Ext Warranty</option>
            <option value="insurance">Insurance</option>
            <option value="rvStation">RV Station</option>
            <option value="warranty">Warranty</option>
          </Select>
        </Box>
        <Divider />
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Repair Description</Heading>
          <Textarea value={repairDescription} onChange={(e) => setRepairDescription(e.target.value)} />
        </Box>
        <Divider />
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>ROOF KIT</Heading>
          <Input type="number" value={roofKit} onChange={(e) => setRoofKit(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>ROOF MEMBRANE</Heading>
          <Input type="number" value={roofMembrane} onChange={(e) => setRoofMembrane(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>SLF LVL DICOR</Heading>
          <Input type="number" value={slfLvlDicor} onChange={(e) => setSlfLvlDicor(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>NON LVL DICIR</Heading>
          <Input type="number" value={nonLvlDicir} onChange={(e) => setNonLvlDicir(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>ROOF SCREWS</Heading>
          <Input type="number" value={roofScrews} onChange={(e) => setRoofScrews(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>GLUE</Heading>
          <Input type="number" value={glue} onChange={(e) => setGlue(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Additional Parts</Heading>
          <Input type="number" value={additionalParts} onChange={(e) => setAdditionalParts(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Extras</Heading>
          <Input type="number" value={extras} onChange={(e) => setExtras(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Sublet</Heading>
          <Input type="number" value={sublet} onChange={(e) => setSublet(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Shop Supplies</Heading>
          <Input type="number" value={shopSupplies} onChange={(e) => setShopSupplies(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Parts</Heading>
          <Input type="number" value={parts} onChange={(e) => setParts(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Hrs</Heading>
          <Input type="number" value={hrs} onChange={(e) => setHrs(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Labor/Hr</Heading>
          <Input type="number" value={laborRate} onChange={(e) => setLaborRate(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Labor</Heading>
          <Input type="number" value={calculateLabor()} isReadOnly />
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={2}>Deductible</Heading>
          <Input type="number" value={deductible} onChange={(e) => setDeductible(parseFloat(e.target.value))} />
        </Box>
        <Box width="100%">
          <HStack justifyContent="space-between">
            <Text fontSize="lg">Tax:</Text>
            <Text fontSize="lg">${calculateTax().toFixed(2)}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="lg">Total:</Text>
            <Text fontSize="lg">${calculateTotal().toFixed(2)}</Text>
          </HStack>
        </Box>
        <Button colorScheme="blue" onClick={formatEstimate}>Format Estimate</Button>
        {formattedEstimate && (
          <Box width="100%" mt={4} p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="md" mb={2}>Formatted Estimate</Heading>
            <pre>{formattedEstimate}</pre>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;